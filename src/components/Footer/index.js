import './index.scss';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Check out my other websites:</p>
        <ul>
          <li>
            <a href="https://example1.com" target="_blank" rel="noopener noreferrer">
              Example 1
            </a>
          </li>
          <li>
            <a href="https://example2.com" target="_blank" rel="noopener noreferrer">
              Example 2
            </a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
