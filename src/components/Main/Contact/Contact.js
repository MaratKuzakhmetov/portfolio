import React from 'react';
import './Contact.scss';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

function Contact() {
  return (
    <section className="contact">
      <div className="contact__intro">
        <h5 className="contact__intro-text contact__text">Get In Touch</h5>
      </div>
      <div className="contact__me">
        <h2 className="contact__me-text contact__text">Contact Me</h2>
      </div>
      <div className="contact__wrapper">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__icon" />
            <h4 className="contact__title">Email</h4>
            <h5 className="contact__info">kuzakhmetovmarat@gmail.com</h5>
            <a href="mailto:kuzakhmetovmarat@gmail.com" className="contact__send">Send a message</a>
          </article>
          <article className="contact__option">
            <BsTelegram className="contact__icon" />
            <h4 className="contact__title">Messenger</h4>
            <h5 className="contact__info">Telegram</h5>
            <a href="https://t.me/Marat_Kuzakhmetov" className="contact__send">Send a message</a>
          </article>
          <article className="contact__option">
            <BsTelegram className="contact__icon" />
            <h4 className="contact__title">Messenger</h4>
            <h5 className="contact__info">WhatsApp</h5>
            <a href="https://api.whatsapp.com/send?phone=4915736524376" className="contact__send">Send a message</a>
          </article>
        </div>
        <div className="contact__message">
          <form>
            <input type="name" name="name" placeholder="Your Full Name" target="blanc" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
