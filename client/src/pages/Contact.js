import { ContactUs } from "../components/ContactForm";
require("../assets/styles/contact.css");

function Contact() {
  return (
    <div className="contact-container">
      {/* <ContactUs /> */}
      <div className="contact-title">contact</div>
      <div className="email">
        If you would like to buy any art or would like to discuss a commission,
        please send an email to:
      </div>
      <div className="email-link link">
        <a href="mailto:shritifernandoart@gmail.com">
          shritifernandoart@gmail.com
        </a>
      </div>
      <div className="email">Alternatively send me a message on instagram</div>
      <div className="email-link link">
        <a href="https://www.instagram.com/shritifernandoart/?hl=en-gb">
          @shritifernandoart
        </a>
      </div>
    </div>
  );
}

export default Contact;
