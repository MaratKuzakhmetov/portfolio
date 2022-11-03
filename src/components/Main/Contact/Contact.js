import React, { useRef } from 'react';
import './Contact.scss';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vfgipyo', 'contact_form', form.current, 'sXKmhYjxjJzJ3ichi');
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
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
            <a href="https://t.me/Marat_Kuzakhmetov" target="_blank" className="contact__send" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__icon" />
            <h4 className="contact__title">Messenger</h4>
            <h5 className="contact__info">WhatsApp</h5>
            <a href="https://api.whatsapp.com/send?phone=4915736524376" target="_blank" className="contact__send" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <div className="contact__message">
          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <input className="contact__input" type="name" name="name" placeholder="Your Full Name" target="blanc" required />
            <input autoComplete="new-password" className="contact__input" type="email" name="email" placeholder="Your Email" required />
            <textarea autoComplete="off" className="contact__input" name="message" rows="7" placeholder="Your Message" required />
            <button type="submit" className="contact__button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
