import React from "react";
//StylesAndContent
import './Footer.css';

function Footer() {
  //Current value of the year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright" lang="en">&copy; {currentYear} Made by Irina Safarova</p>
    </footer>
  );
}

export default Footer;