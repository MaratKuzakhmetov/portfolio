import React from 'react';
import './Footer.scss';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="footer">
      <a href="!#" className="footer__intro">M.K</a>

      <ul className="footer__links-wrapper">
        <li className="footer__links">
          <a className="footer__link">
            Home
          </a>
        </li>
        <li className="footer__link">
          <a className="footer__link">
            About
          </a>
        </li>
        <li className="footer__link">
          <a className="footer__link">
            Experience
          </a>
        </li>
        <li className="footer__link">
          <a className="footer__link">
            Services
          </a>
        </li>
        <li className="footer__link">
          <a className="footer__link">
            Portfolio
          </a>
        </li>
        <li className="footer__link">
          <a className="footer__link">
            Contact
          </a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="!#" className="footer__social">
          <AiFillLinkedin />
        </a>
        <a href="!#" className="footer__social">
          <AiOutlineInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Marat Kuzakhmetov Software Developer</small>
      </div>
    </footer>
  );
}

export default Footer;
