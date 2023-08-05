const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const userEmail = process.env.USER_GMAIL;
const userPassword = process.env.GMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: userEmail,
    pass: userPassword,
  },
});

module.exports = { transporter: transporter };
