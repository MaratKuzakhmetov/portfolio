import React from 'react';
import './Footer.scss';
import { AiFillLinkedin, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="footer">
      <a href="#header" className="footer__intro">M.K</a>

      <ul className="footer__links-wrapper">
        <li className="footer__links">
          <a className="footer__link" href="#header">
            Home
          </a>
        </li>
        <li className="footer__links">
          <a className="footer__link" href="#about">
            About
          </a>
        </li>
        <li className="footer__links">
          <a className="footer__link" href="#experience">
            Experience
          </a>
        </li>
        <li className="footer__links">
          <a className="footer__link" href="#services">
            Services
          </a>
        </li>
        <li className="footer__links">
          <a className="footer__link" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className="footer__links">
          <a className="footer__link" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/marat-kuzakhmetov/" className="footer__social">
          <AiFillLinkedin className="footer__icon" />
        </a>
        <a href="https://www.instagram.com/marat_kuzakhmetov/" className="footer__social">
          <AiOutlineInstagram className="footer__icon" />
        </a>
        <a href="https://github.com/MaratKuzakhmetov" className="footer__social">
          <AiFillGithub className="footer__icon" />
        </a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Marat Kuzakhmetov Software Developer</small>
      </div>
    </footer>
  );
}

export default Footer;
