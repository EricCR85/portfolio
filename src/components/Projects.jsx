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
                src={`${process.env.PUBLIC_URL}/assets/skintrics.png`}
                className="snapshot"
                alt="Skintrics AI Skincare Application snapshot"
              />
              <div className="project__description">
                <h3 className="project__description__title">
                  Skintrics – AI Skincare Application
                </h3>
                <h4 className="project__description__subtitle">
                  Next.js, Tailwind CSS, OpenAI, Vision API
                </h4>
                <p className="project__description__para">
                  Engineered a responsive web application leveraging Next.js and
                  Tailwind CSS to deliver real-time AI-powered skincare
                  analysis. Integrated RESTful API endpoints and optimized state
                  management to handle interactive user inputs smoothly.
                </p>
                <div className="project__description__links">
                  <div className="project__description__link">
                    <a
                      href="https://github.com/EricCR85"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <div className="project__description__link">
                    <a
                      href="https://skintrics.com"
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
                src={`${process.env.PUBLIC_URL}/assets/prep-ai.png`}
                className="snapshot"
                alt="Prep AI snapshot"
              />
              <div className="project__description">
                <h3 className="project__description__title">
                  Prep AI – Interview Preparation Platform
                </h3>
                <h4 className="project__description__subtitle">
                  Next.js, TypeScript, Tailwind CSS, Supabase, OpenAI
                </h4>
                <p className="project__description__para">
                  An AI-driven interview preparation simulator engineered with
                  dynamic interactive user flows, performance logging metrics,
                  and authentication logic for persistent user sessions.
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
              />
              <div className="project__description">
                <h3 className="project__description__title">
                  CryptoPulse Dashboard
                </h3>
                <h4 className="project__description__subtitle">
                  React, JavaScript, REST APIs, CSS
                </h4>
                <p className="project__description__para">
                  Developed a real-time cryptocurrency tracking dashboard
                  featuring interactive watchlists, dynamic filtering, and live
                  market charts powered by external financial REST APIs.
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
                      href="https://cryptopulse-dashboard.vercel.app/"
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
                alt="Summarist AI Summarization snapshot"
              />
              <div className="project__description">
                <h3 className="project__description__title">
                  Summarist – AI Summarization Web Application
                </h3>
                <h4 className="project__description__subtitle">
                  Next.js, TypeScript, React, Redux, REST APIs
                </h4>
                <p className="project__description__para">
                  Built a Next.js and TypeScript single-page application
                  incorporating dynamic client-side routing, payload loading
                  states, and optimized Redux state management.
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
        </ul>
      </div>
    </section>
  );
}

export default Projects;


