const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});

//console.log(transporter);

module.exports = async function sendEmail(to, subject, text) {
    const info = await transporter.sendMail({
        from: process.env.SMTP_USERNAME,
        to: to,
        subject: subject,
        text: text,
    });
};

//sendEmail().catch(console.error);
