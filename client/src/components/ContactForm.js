import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

require("../assets/styles/contact-form.css");

export const ContactUs = () => {
  axios.defaults.withCredentials = true;
  const form = useRef();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    const newEmail = {
      user_name: name,
      user_email: email,
      message: message,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/send-email",
        newEmail
      );

      // Clear the form
      form.current.reset();

      navigate("/");
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  };

  const EmailContactForm = () => {
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          (result) => {
            // show the user a success message
            navigate("/");
          },
          (error) => {
            // show the user an error
            console.error(error);
            navigate("/");
          }
        );
    };
  };

  return (
    <div className="form-container">
      <div>{process.env.REACT_APP}</div>

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="user_email"
        />
        <label>Message</label>
        <textarea onChange={(e) => setMessage(e.target.value)} name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
