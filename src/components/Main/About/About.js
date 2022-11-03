/* eslint-disable max-len */
import React from 'react';
import './About.scss';

function About() {
  return (
    <section className="about" id="about">
      <div className="about__intro">
        <h5 className="about__intro-text about__text">Get to know</h5>
      </div>
      <div className="about__me">
        <h2 className="about__me-text about__text">About me</h2>
      </div>
      <div className="about__details">
        <div className="about__avatar">
          <img src="./images/photo.jpeg" alt="img" className="about__avatar-img" />
        </div>
        <div className="about__information">
          <p className="about__information-text">
            I do software development. I like to develop and learn something new. And this is the main reason why I chose the IT field. There is no limit to development in IT.
          </p>
          <p className="about__information-text">
            I love teamwork as well as solo projects! I am an extroverted introvert, so I am productive in any work environment.
          </p>
          <a href="#contact" className="header__button button button-primary about__button">Write me</a>
        </div>
      </div>
    </section>
  );
}

export default About;
