import { ContactUs } from "../components/ContactForm";
require("../assets/styles/contact.css");

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-title">contact</div>
      <ContactUs />
    </div>
  );
}

export default Contact;
