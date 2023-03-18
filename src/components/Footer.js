import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright" lang="en">&copy; {currentYear} Made by Irina Safarova</p>
    </footer>
  );
}

export default Footer;