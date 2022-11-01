import React from 'react';
import './Portfolio.scss';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__intro">
        <h5 className="portfolio__intro-text portfolio__text">My Recent Work</h5>
      </div>
      <div className="portfolio__me">
        <h2 className="portfolio__me-text portfolio__text">My Porfolio</h2>
      </div>
      <div className="portfolio__wrapper">
        <div className="portfolio__project">
          <div className="porfolio__image">
            <img src="./images/we-want-home.png" alt="we-want-home" className="portfolio-img" />
          </div>
          <div className="portfolion__title">
            <h3 className="portfolio-title">
              We Want Home
            </h3>
          </div>
          <div className="portfolio__description">
            <p className="portfolio-description">
              The social project to help people find their lost animals
            </p>
          </div>
          <a href="https://github.com/MaratKuzakhmetov/We-Want-Home" download className="portfolio__button button" target="_blank" rel="noreferrer">
            Button
          </a>
        </div>
        <div className="portfolio__project">
          <div className="porfolio__image">
            <img src="./images/tokio.png" alt="tokio" className="portfolio-img" />
          </div>
          <div className="portfolion__title">
            <h3 className="portfolio-title">
              Tokyo
            </h3>
          </div>
          <div className="portfolio__description">
            <p className="portfolio-description">
              The landing page with some information about Tokyo
            </p>
          </div>
          <a href="https://github.com/MaratKuzakhmetov/Japan" download className="portfolio__button" target="_blank" rel="noreferrer">
            Button
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
