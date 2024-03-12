var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const jwt = require('jsonwebtoken');
const expressWinston = require('express-winston');

var app = express();

var savedLocationsRouter = require('./routes/savedLocation');
var accountRouter = require('./routes/account');
var forecastRouter = require('./routes/forecast');
const { User, Token } = require('./db');
const { transports, format } = require('winston');
const log = require('./logger');

app.use(
    expressWinston.logger({
        winstonInstance: log,
        statusLevels: true,
    })
);

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//middleware that provides token verification
app.use(async (req, res, next) => {
    const {
        headers: { authorization }, // Authorization = 'Bearer Token'
    } = req;

    if (authorization) {
        //console.log('hello 2');
        try {
            //console.log('try entered');
            const encodedJwtToken = authorization.slice(7); // 'wekevqivbqeivbqriuv'
            //console.log(encodedJwtToken);
            const decodedJwtToken = jwt.verify(
                encodedJwtToken,
                process.env.JWTSECRET
            );
            //console.log(decodedJwtToken);
            //{email: yalo@ukr.net, iat:123455, exp: 134556}
            const token = await Token.findOne({ token: encodedJwtToken });
            //console.log(token);
            if (token.loggedin === false) {
                log.warn('token is invalid');
                return next(new Error('Token is invalid'));
            }
            //console.log('hello 3');
            req.user = await User.findOne({ email: decodedJwtToken.email });

            log.info(req.user + 'successfully logged in', req.user);
        } catch (err) {
            log.warn(err);
            return next(err);
        }
    }

    next();
});

app.use('/account', accountRouter);
app.use('/forecast', forecastRouter);
app.use('/locations', savedLocationsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

const myFormat = format.printf(({ level, meta, timestamp }) => {
    return `${timestamp} ${level} ${meta.message}`;
});

app.use(
    expressWinston.errorLogger({
        transports: [
            new transports.File({
                filename: 'logsInternalErrors.log',
            }),
        ],
        format: format.combine(format.json(), format.timestamp()),
    })
);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
});

module.exports = app;
