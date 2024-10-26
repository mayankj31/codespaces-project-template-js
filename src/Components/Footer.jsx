/**
 * Footer component
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 */
import React from "react";
import PropTypes from "prop-types";

import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";

const Footer = (props) => {
  const {
    email,
    gitHub,
    linkedIn,
    name,
    primaryColor,
  } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: primaryColor,
        width: "100vw"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        {email && (
          <a href={`mailto:mayankjugran81@gmail.com`}>
            <img src={envelopeIcon} alt="email" className="socialIcon" />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/mayankj31`} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}

        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/mayank-jugran-531479285`}
            target="blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
      </div>
      <p className="small" style={{ marginTop: 0, color: "white" }}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  email: PropTypes.string,
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
};

export default Footer;
