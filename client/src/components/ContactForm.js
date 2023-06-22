import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

require("../assets/styles/contact-form.css");

export const ContactUs = () => {
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const form = useRef();
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
    }
  };

  return (
    <div className="form-container">
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
