import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ logo }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-28 object-contain" id="footerImg" />
          </Link>
        </div>
        <div className="footer-links">
          <Link to="#">About Us</Link>
          <Link to="#">Contact Us</Link>
          <Link to="#">Privacy Policy</Link>
        </div>
        <div className="footer-copyright">
          Copyright &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
