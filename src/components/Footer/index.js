import './index.scss';
import React from 'react';

const Footer = () => {
  return (
    <div className="container foot">
      <footer className="footer">
        <div className="footer-content">
          <h2>Rohan
            <br />
            Datta
          </h2>
          <ul>
            <li>
              <a href="https://github.com/RoaringRohan" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dattarohan/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.chess.com/member/roaringrohan" target="_blank" rel="noopener noreferrer">
                Chess
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
