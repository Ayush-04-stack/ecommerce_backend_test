const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendEmail(email, username) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Account Created Successfully",
        text: `Hi ${username}, your account was created successfully! 🎉`,
        html: `<h2>Welcome ${username}</h2>
               <p>Your account has been created successfully 🎉</p>`
    });

    console.log("Email sent successfully!");
}

module.exports = sendEmail;