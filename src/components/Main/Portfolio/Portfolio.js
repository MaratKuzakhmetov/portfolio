import React from 'react';
import './Portfolio.scss';
import Carousel from 'react-bootstrap/Carousel';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__intro">
        <h5 className="portfolio__intro-text portfolio__text">My Recent Work</h5>
      </div>
      <div className="portfolio__me">
        <h2 className="portfolio__me-text portfolio__text">My Porfolio</h2>
      </div>
      <div className="portfolio__wrapper">
        <div className="portfolio__project">
          <div className="porfolio__image">
            <img src="!#" alt="project" className="portfolio-img" />
          </div>
          <div className="portfolion__title">
            <h3 className="portfolio-title">
              Title1
            </h3>
          </div>
          <div className="portfolio__description">
            <p className="portfolio-description">
              description1
            </p>
          </div>
          <div className="porfolio__button">
            <a href="!#" className="portfolio-button">
              Button
            </a>
          </div>
        </div>
        <div className="portfolio__project">
          <div className="porfolio__image">
            <img src="!#" alt="project" className="portfolio-img" />
          </div>
          <div className="portfolion__title">
            <h3 className="portfolio-title">
              Title1
            </h3>
          </div>
          <div className="portfolio__description">
            <p className="portfolio-description">
              description1
            </p>
          </div>
          <div className="porfolio__button">
            <a href="!#" className="portfolio-button">
              Button
            </a>
          </div>
        </div>
        <div className="portfolio__project">
          <div className="porfolio__image">
            <img src="!#" alt="project" className="portfolio-img" />
          </div>
          <div className="portfolion__title">
            <h3 className="portfolio-title">
              Title1
            </h3>
          </div>
          <div className="portfolio__description">
            <p className="portfolio-description">
              description1
            </p>
          </div>
          <div className="porfolio__button">
            <a href="!#" className="portfolio-button">
              Button
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
