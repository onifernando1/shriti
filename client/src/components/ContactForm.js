import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState, setState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const ContactUs = () => {
  const [service, setService] = useState("");
  const [template, setTemplate] = useState("");
  const [publicKey, setPublicKey] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/config`)
      .then((response) => {
        setService(response.data.service_id);
        setTemplate(response.data.template_id);
        setPublicKey(response.data.public_key);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service, template, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
