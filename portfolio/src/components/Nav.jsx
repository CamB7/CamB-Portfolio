import React from 'react';
import CBlogo from '../images/CBlogo.png';
import githubIcon from '../images/githublogo.png';
import linkedinIcon from '../images/linkedinlogo.png';
import '../Nav.css';

const Nav = () => {
  return (
    <div className="vertical-nav">
      <div className="nav-top">
        <img src={CBlogo}></img>
        <h1>
          Cameron
          <br />
          Boyer
        </h1>
        <h2>Software Developer</h2>
      </div>
      <div className="nav-bottom">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <hr />
        <div className="social-links">
          <a
            href="https://github.com/CamB7/CamB-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/cameron-boyer-934527265/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
