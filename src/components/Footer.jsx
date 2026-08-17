import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__content">
        <div className="footer__logocontainer">
          <a href="#" className="footer__anchor">
            <img
              src={`${process.env.PUBLIC_URL}/assets/footerlogo.png`}
              className="footer__logo"
              alt="footer logo"
            />
            <span className="footer__logo__popper">
              Top
              <i className="fas fa-arrow-up"></i>
            </span>
          </a>
        </div>
        <ul className="footer__social-links">
          <li className="footer__social-link">
            <a
              href="https://www.linkedin.com/in/eric-reeves-36ab5514b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="footer__social-link">
            <a
              href="https://github.com/EricCR85"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="footer__social-link">
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
        <p className="copyright">Copyright © 2026 Eric Reeves</p>
      </div>
    </footer>
  );
}

export default Footer;
