var express = require('express');
var router = express.Router();
var { User, Token } = require('./../db');
const bcrypt = require('bcrypt');
const { query, body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const validateEmail = () =>
    body('email').notEmpty().withMessage('You email is empty').isEmail();
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
        .withMessage('You password doesnt meet the requirements');

router.post(
    '/create', //doesnt give me any token yet
    validateEmail(),
    validatePassword(),
    async function (req, res) {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.send({ errors: result.array() });
        }

        const loginData = req.body; //{email:..., password:...}

        const existingUser = await User.exists({
            // returns existing user or null
            email: loginData.email,
        });

        if (existingUser) {
            res.status(400).end('User with this email already exists');

            return;
        }

        const user = await User.create({
            email: loginData.email,
            passwordHash: await bcrypt.hash(loginData.password, 10),
        });

        res.end('You have seccussfully created an account');
    }
);

router.delete('/delete', async function (req, res) {
    if (req.user) {
        await User.findOneAndDelete(req.user);
        return res.end('User has been successfully deleted');
    }

    res.status(401).end();
});

router.post(
    '/login',
    validateEmail(),
    validatePassword(),
    async function (req, res) {
        const loginData = req.body; //{email:..., password:...}

        const existingUser = await User.findOne({ email: loginData.email });

        if (!existingUser) {
            res.status(400).end(`This email doesn't exist`);

            return;
        }

        const isPasswordMatch = await bcrypt.compare(
            loginData.password,
            existingUser.passwordHash
        );

        if (!isPasswordMatch) {
            res.status(400).end(`Email or Password doesn't match`);
            return;
        }

        const token = jwt.sign(
            //only here we get out token for the first time
            { email: existingUser.email },
            process.env.JWTSECRET,
            {
                expiresIn: '60 days',
            }
        ); //{email: yalo@ukr.net, iat:123455, exp: 134556}

        await Token.create({ token, userId: existingUser._id, loggedin: true });

        res.end(token);
    }
);

router.delete('/logout', async function (req, res) {
    if (req.user) {
        console.log('user exists');
        await Token.findOneAndUpdate(
            {
                userId: req.user._id,
                token: req.headers.authorization.slice(7),
            },
            { loggedin: false }
        );
        return res.end('User has been successfully logged out');
    }

    res.status(401).end();
});

module.exports = router;
