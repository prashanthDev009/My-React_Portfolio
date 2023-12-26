import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// =============Email trigger useRef from react================================
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_x13frz6",
      "template_v0a8fvr",
      form.current,
      "Z_fDnvAxvasr8NBqP"
    );
    e.target.reset();
  };

  // ================================Logic start+++++++++++++++++++++++++++
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>prashanthdev009@gmail.com</h5>
            <a href="mailto:prashanthdev009@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <CiLinkedin className="contact__option-icon" />
            <h4>LinkedIN</h4>
            <h5>Prashanth Koteswaran</h5>
            <a
              href="https://linkedin.com/in/prashanth-koteswaran"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+12345678</h5>
            <a
              href="https://api.whatsapp.com/send?phone+918883826585"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* End Of contact */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder=" Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder=" Your Email ID "
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
