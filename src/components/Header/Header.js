/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import './Header.scss';

function Header() {
  return (
    <header className="header" id="header">
      <div className="header__container">
        <div className="header__primary-info">
          <h5 className="header__greeting header-text">Hello I'am</h5>
          <h1 className="header__name header-text">Marat Kuzakhmetov</h1>
          <h5 className="header__profession header-text">Software Developer</h5>
        </div>
        <div className="header__cta">
          <a href="./images/cv.pdf" download className="header__button button">Download CV</a>
          <a href="#contact" className="header__button button button-primary">Write me</a>
        </div>
        <div className="header__contact-info">
          <div className="header__socials">
            <a href="https://www.linkedin.com/in/marat-kuzakhmetov/" target="_blank" className="header-icon" rel="noreferrer">
              <BsLinkedin className="header__icon" />
            </a>
            <a href="https://www.instagram.com/marat_kuzakhmetov/" target="_blank" className="header-icon" rel="noreferrer">
              <AiOutlineInstagram className="header__icon" />
            </a>
            <a href="https://github.com/MaratKuzakhmetov" target="_blank" className="header-icon" rel="noreferrer">
              <AiFillGithub className="header__icon" />
            </a>
          </div>
          <div className="header__avatar">
            <img src="./images/avatar.jpg" alt="avatar" className="header__avatar-img" />
          </div>
          <div className="header__scroll">
            <a href="#contact" className="header__scroll-down">Scroll Down</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
