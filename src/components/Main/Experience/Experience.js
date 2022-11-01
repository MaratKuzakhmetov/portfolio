import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import './Experience.scss';

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__intro">
        <h5 className="experience__intro-text experience__text">The Skills I Have</h5>
      </div>
      <div className="experience__me">
        <h2 className="experience__me-text experience__text">My Experience</h2>
      </div>
      <div className="experience__wrapper">
        <div className="experience__frontend experience__stack">
          <h3 className="experience__title">Frontend Development</h3>
          <div className="experience__content">
            <aricle className="experience__details">
              <BsFillCheckCircleFill className="experience__icon" />
              <h4 className="experience__language">HTML</h4>
            </aricle>
            <aricle className="experience__details">
              <BsFillCheckCircleFill className="experience__icon" />
              <h4 className="experience__language">CSS</h4>
            </aricle>
            <aricle className="experience__details">
              <BsFillCheckCircleFill className="experience__icon" />
              <h4 className="experience__language">React</h4>
            </aricle>
            <aricle className="experience__details">
              <BsFillCheckCircleFill className="experience__icon" />
              <h4 className="experience__language">Redux</h4>
            </aricle>
            <aricle className="experience__details">
              <BsFillCheckCircleFill className="experience__icon" />
              <h4 className="experience__language">JS</h4>
            </aricle>
            <aricle className="experience__details">
              <BsFillCheckCircleFill className="experience__icon" />
              <h4 className="experience__language">Bootstrap</h4>
            </aricle>
          </div>
        </div>
        <div className="experience__backend experience__stack">
          <h3 className="experience__title">Backend Development</h3>
          <div className="experience__content">
            <aricle className="experience__details">
              <BsFillCheckCircleFill className="experience__icon" />
              <h4 className="experience__language">Node JS</h4>
            </aricle>
            <aricle className="experience__details">
              <BsFillCheckCircleFill className="experience__icon" />
              <h4 className="experience__language">Express</h4>
            </aricle>
            <aricle className="experience__details">
              <BsFillCheckCircleFill className="experience__icon" />
              <h4 className="experience__language">MySQL</h4>
            </aricle>
            <aricle className="experience__details">
              <BsFillCheckCircleFill className="experience__icon" />
              <h4 className="experience__language">PostgreSQL</h4>
            </aricle>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
