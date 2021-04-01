import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

library.add(faInstagram, faLinkedin, faGithub, faMedium, faEnvelope);
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/raquel-randall/"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Saekit"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@raquel.sae.randall"
        >
          <FontAwesomeIcon icon={faMedium} size="3x" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/adventures.in.saeland"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:raquel.sae.randall@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </a>
      </div>

      <div className="footer-c">
        <p>© 2021 Raquel Randall</p>
      </div>
    </footer>
  );
};
export default Footer;
