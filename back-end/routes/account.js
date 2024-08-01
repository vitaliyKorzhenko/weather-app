var express = require('express');
var router = express.Router();
var { User, Token } = require('./../db');
var logger = require('../logger');

const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const log = require('../logger');
const sendEmail = require('../mailer');
const { v4: uuidv4 } = require('uuid');

const validateEmail = () =>
    body('email').notEmpty().withMessage('Your email is empty').isEmail();
const validatePassword = () =>
    body('password')
        .notEmpty()
        .withMessage('You password is empty')
        .isStrongPassword({
            minLength: 5,
            minLowercase: 3,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 0,
        })
        .withMessage('Your password doesnt meet the requirements');

const createNewToken = async (email, isVerified, userId) => {
    const token = jwt.sign(
        //only here we get our token for the first time
        { email, isVerified },
        process.env.JWTSECRET,
        {
            expiresIn: '60 days',
        }
    ); //{email: yalo@ukr.net, iat:123455, exp: 134556}

    await Token.create({ token, userId, loggedin: true });
    return token;
};

router.post(
    '/create', //doesnt give me any token yet
    validateEmail(),
    validatePassword(),
    async function (req, res) {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).send({ errors: result.array() });
        }

        const loginData = req.body; //{email:..., password:...}

        const existingUser = await User.exists({
            // returns existing user or null
            email: loginData.email,
        });

        if (existingUser) {
            log.warn('User with this email already exists');
            res.status(400).end('User with this email already exists');

            return;
        }

        const user = await User.create({
            email: loginData.email,
            passwordHash: await bcrypt.hash(loginData.password, 10),
            isVerified: false,
            verificationCode: uuidv4(),
        });

        log.info('You have successfully created an account');

        const token = await createNewToken(
            user.email,
            user.isVerified,
            user._id
        );

        sendEmail(
            user.email,
            'Verification',
            `${process.env.VERIFY_BASE_URL}account/verify?code=${user.verificationCode}`
        );

        res.end(token);
    }
);

router.get('/verify', async function (req, res) {
    const verificationCode = req.query.code;

    const existingUser = await User.exists({
        // returns existing user or null
        verificationCode: verificationCode,
    });

    if (!existingUser) {
        return res.redirect(process.env.REDIRECT_URL_HOME);
    }

    logger.error(existingUser);

    const user = await User.findOneAndUpdate(
        { _id: existingUser._id },
        { isVerified: true },
        { new: true }
    );

    logger.error(user);

    const token = await createNewToken(user.email, user.isVerified, user._id);
    logger.error(`backend token: ${token}`);

    // res.redirect(`${process.env.REDIRECT_URL_HOME}?token=${token}`);

    res.cookie('token', token, { httpOnly: false }).redirect(
        `${process.env.REDIRECT_URL_HOME}`
    );
});

router.delete('/delete', async function (req, res) {
    if (req.user) {
        await User.findOneAndDelete(req.user);
        await Token.deleteMany({ userId: req.user._id });

        return res.end('User has been successfully deleted');
    }

    log.info('User has been successfully deleted');

    res.status(401).end();
});

router.post(
    '/login',
    validateEmail(),
    validatePassword(),
    async function (req, res) {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).send({ errors: result.array() });
        }

        const loginData = req.body; //{email:..., password:...}

        const existingUser = await User.findOne({ email: loginData.email });

        if (!existingUser) {
            log.warn('User is not found');

            res.status(400).send({
                errors: [{ msg: `This email doesn't exist` }],
            });

            return;
        }

        const isPasswordMatch = await bcrypt.compare(
            loginData.password,
            existingUser.passwordHash
        );

        if (!isPasswordMatch) {
            log.warn(`Email or Password doesn't match`);
            res.status(400).send({
                errors: [{ msg: `Email or Password doesn't match` }],
            });
            return;
        }

        const token = await createNewToken(
            existingUser.email,
            existingUser.isVerified,
            existingUser._id
        );

        log.info('User is successfully logged in');

        res.end(token);
    }
);

router.delete('/logout', async function (req, res) {
    if (req.user) {
        log.info('User exists');
        await Token.findOneAndUpdate(
            {
                userId: req.user._id,
                token: req.headers.authorization.slice(7),
            },
            { loggedin: false }
        );
        log.info('User has been successfully logged out');
        return res.end('User has been successfully logged out');
    }

    res.status(401).end();
});

module.exports = router;
