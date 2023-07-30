const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const nodemailer = require("nodemailer");
// const Email = require("../models/Email");

router.post("/send-email", async (req, res) => {
  const { user_name, user_email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  // const email = new Email({
  //   id: uuidv4(),
  //   name: user_name,
  //   email: user_email,
  //   message: message,
  // });

  // await email.save();

  let mailOptions = {
    from: "shritfernandowebsite@gmail.com",
    to: "skpops@hotmail.co.uk",
    subject: "Nodemailer Project",
    text: `Name: ${user_name}, Email: ${user_email}, Message: ${message}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

  // res.send(email);
  res.send("email sent");
});

module.exports = router;
