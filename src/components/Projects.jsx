import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <div className="projects__content">
        <h1 className="projects__title">
          Here are some of my <span className="text--blue">projects</span>
        </h1>
        <ul className="projects__list">
          <li className="project">
            <div className="project__wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/assets/prep-ai.png`}
                className="snapshot"
                alt="Prep AI snapshot"
              ></img>
              <div className="project__description">
                <h3 className="project__description__title">Prep AI</h3>
                <h4 className="project__description__subtitle">
                  Next.js, Tailwind CSS, OpenAI, Vision API
                </h4>
                <p className="project__description__para">
                  An AI-driven intervierw preparation simulator built with
                  dynamic interactive user flows, performace logging metrics,
                  and simulated database authentication logic.
                </p>
                <div className="project__description__links">
                  <div className="project__description__link">
                    <a
                      href="https://github.com/EricCR85/prep-ai.git"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <div className="project__description__link">
                    <a
                      href="https://prep-ai-olive.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="project">
            <div className="project__wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/assets/cryptopulse.png`}
                className="snapshot"
                alt="CryptoPulse Dashboard snapshot"
              ></img>
              <div className="project__description">
                <h3 className="project__description__title">
                  CryptoPulse Dashboard
                </h3>
                <h4 className="project__description__subtitle">
                  React, JavaScript, API, CSS
                </h4>
                <p className="project__description__para">
                  Developed a real-time cryptocurrency tracking Dashboard with
                  interactive watchlist and live market charts.
                </p>
                <div className="project__description__links">
                  <div className="project__description__link">
                    <a
                      href="https://github.com/EricCR85/Crytopulse-dashboard.git"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <div className="project__description__link">
                    <a
                      href="https://crytopulse-dashboard.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="project">
            <div className="project__wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/assets/saa-s-analytics.png`}
                className="snapshot"
                alt="SaaS Analytics Dashboard snapshot"
              ></img>
              <div className="project__description">
                <h3 className="project__description__title">
                  SaaS Analytics Dashboard
                </h3>
                <h4 className="project__description__subtitle">
                  TailwindCSS v4, React, LocalStorage
                </h4>
                <p className="project__description__para">
                  Designed and deployed a functional TailwindCSS v4 dashboard
                  with local storage persistence and dynamic chart
                  visualizations.
                </p>
                <div className="project__description__links">
                  <div className="project__description__link">
                    <a
                      href="https://github.com/EricCR85/SaaS-analytics-dashboard.git"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <div className="project__description__link">
                    <a
                      href="https://saa-s-analytics-dashboard-lake.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="project">
            <div className="project__wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/assets/summarist.png`}
                className="snapshot"
                alt="Summarrist AI Summarization snapshot"
              ></img>
              <div className="project__description">
                <h3 className="project__description__title">
                  Summarist - AI Summarization Web Application
                </h3>
                <h4 className="project__description__subtitle">
                  Next.js, TypeScript, React, Redux
                </h4>
                <p className="project__description__para">
                  Engineered a responsive Next.js and TypeScript web app
                  featuring dynamic routing and optimized state management.
                </p>
                <div className="project__description__links">
                  <div className="project__description__link">
                    <a
                      href="https://github.com/EricCR85/summarist.git"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <div className="project__description__link">
                    <a
                      href="https://summarist-tan.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="project">
            <div className="project__wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/assets/breezesnapshot.PNG`}
                className="snapshot"
                alt="mc snapshot"
              ></img>
              <div className="project__description">
                <h3 className="project__description__title">Breeze 2</h3>
                <h4 className="project__description__subtitle">
                  React, Google API, National Weather Service API
                </h4>
                <p className="project__description__para">
                  The second version of a simple weather app. The National
                  Weather Service API provides data for any US domestic
                  location. Features of this application include location
                  autocomplete suggestions, dynamic components, and responsive
                  design.
                </p>
                <div className="project__description__links">
                  <div className="project__description__link">
                    <a
                      href="https://github.com/DvdHLee/Breeze2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <div className="project__description__link">
                    <a
                      href="https://dvdhlee.github.io/Breeze2/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="project">
            <div className="project__wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/assets/mcsnapshot.png`}
                className="snapshot"
                alt="mc snapshot"
              ></img>
              <div className="project__description">
                <h3 className="project__description__title">Meal Chewser</h3>
                <h4 className="project__description__subtitle">
                  React, Google API
                </h4>
                <p className="project__description__para">
                  My first ever project! Meal Chewser is a random restaurant
                  generator designed to make deciding where to eat fun and
                  stress free. All you have to do is type in a location and some
                  optional filters, and it will automatically choose a
                  restaurant for you.
                </p>
                <div className="project__description__links">
                  <div className="project__description__link">
                    <a
                      href="https://github.com/arizonaCoderz/meal-chewser"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <div className="project__description__link">
                    <a
                      href="https://arizonacoderz.github.io/meal-chewser/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="project">
            <div className="project__wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/assets/moreorlesssnapshot.png`}
                className="snapshot"
                alt="more or less snapshot"
              ></img>
              <div className="project__description">
                <h3 className="project__description__title">More or Less</h3>
                <h4 className="project__description__subtitle">
                  React, HTML, CSS, JavaScript
                </h4>
                <p className="project__description__para">
                  More or Less is a simple trivia game where you guess "more" or
                  "less" on a given numerical statement. You can play 5 rounds
                  per day and various statistics are logged automatically using
                  local browser storage.
                </p>
                <div className="project__description__links">
                  <div className="project__description__link">
                    <a
                      href="https://github.com/DvdHLee/Moreorless"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <div className="project__description__link">
                    <a
                      href="https://dvdhlee.github.io/Moreorless/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
