import React from 'react';
import './Services.scss';
import { BsCheck2 } from 'react-icons/bs';

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__intro">
        <h5 className="services__intro-text services__text">What I offer</h5>
      </div>
      <div className="services__me">
        <h2 className="services__me-text services__text">Services</h2>
      </div>
      <div className="services__wrapper">
        <div className="services__position">
          <div className="services__header">
            <h3 className="services__title">Frontend Development</h3>
          </div>
          <ul className="services__list">
            <li className="service__skill">
              <BsCheck2 className="service__skill-icon" />
              <h4 className="service__task">
                Component display logic
              </h4>
            </li>
            <li className="service__skill">
              <BsCheck2 className="service__skill-icon" />
              <h4 className="service__task">
                Stylization of project
              </h4>
            </li>
            <li className="service__skill">
              <BsCheck2 className="service__skill-icon" />
              <h4 className="service__task">
                Development of functional components with React and Redux
              </h4>
            </li>
            <li className="service__skill">
              <BsCheck2 className="service__skill-icon" />
              <h4 className="service__task">
                Routing setup with React Router DOM
              </h4>
            </li>
            <li className="service__skill">
              <BsCheck2 className="service__skill-icon" />
              <h4 className="service__task">
                Transferring logic from React to Redux store(Thunk)
              </h4>
            </li>
            <li className="service__skill">
              <BsCheck2 className="service__skill-icon" />
              <h4 className="service__task">
                Website layout based on layouts (Photoshop, Figma)
              </h4>
            </li>
            <li className="service__skill">
              <BsCheck2 className="service__skill-icon" />
              <h4 className="service__task">
                Development of interactive page elements (tabs, sliders,
                accordions, carousels)
              </h4>
            </li>
            <li className="service__skill">
              <BsCheck2 className="service__skill-icon" />
              <h4 className="service__task">
                Semantic layout
              </h4>
            </li>
            <li className="service__skill">
              <BsCheck2 className="service__skill-icon" />
              <h4 className="service__task">
                Development and validation of forms on the site
              </h4>
            </li>
          </ul>
        </div>
        <div className="services__position">
          <div className="services__header">
            <h3 className="services__title">Backend Development</h3>
          </div>
          <ul className="services__list">
            <li className="service__skill">
              <BsCheck2 className="service__skill-icon" />
              <h4 className="service__task">
                Set up back-end
              </h4>
            </li>
            <li className="service__skill">
              <BsCheck2 className="service__skill-icon" />
              <h4 className="service__task">
                Set up endpoints according to REST API
              </h4>
            </li>
            <li className="service__skill">
              <BsCheck2 className="service__skill-icon" />
              <h4 className="service__task">
                Designing the database structure and optimizing SQL queries
              </h4>
            </li>
            <li className="service__skill">
              <BsCheck2 className="service__skill-icon" />
              <h4 className="service__task">
                API integration with internal and external systems
              </h4>
            </li>
            <li className="service__skill">
              <BsCheck2 className="service__skill-icon" />
              <h4 className="service__task">
                Differentiation of user rights
              </h4>
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
