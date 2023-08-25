import { ContactUs } from "../components/ContactForm";
require("../assets/styles/contact.css");

function Contact() {
  return (
    <div className="contact-container">
      {/* <ContactUs /> */}
      <div className="email">Please send an email to:</div>
      <div className="email-link">
        <a href="mailto:shritifernandoart@gmail.com">
          shritifernandoart@gmail.com
        </a>
      </div>
      <div className="email">Alternatively send me a message on instagram</div>
      <div className="email-link">
        <a href="https://www.instagram.com/shritifernandoart/?hl=en-gb">
          @shritifernandoart
        </a>
      </div>
    </div>
  );
}

export default Contact;
