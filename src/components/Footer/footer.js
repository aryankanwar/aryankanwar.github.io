import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} | Made with ❤️ by Aryan
      Kanwar
    </footer>
  );
};

export default Footer;
