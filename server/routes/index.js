const express = require("express");
const router = express.Router();
const emailjs = require("emailjs-com");
const Email = require("../models/Email");
const { v4: uuidv4 } = require("uuid");

router.post("/send-email", async (req, res) => {
  const { user_name, user_email, message } = req.body;

  const email = new Email({
    id: uuidv4(),
    name: user_name,
    email: user_email,
    message: message,
  });

  await email.save();

  res.send(email);
});

module.exports = router;
