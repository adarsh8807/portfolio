import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowUp } from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer-section pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Adarsh.dev</h5>
            <p>
              Passionate Software Developer focused on building modern,
              responsive and user-friendly web applications using React,
              Bootstrap and Material UI.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="/resume_adarsh.pdf" target="_blank">Resume</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Contact</h5>
            <p><FaEnvelope className="me-2" /> alokpandey8807@gmail.com</p>
            <p><FaPhone className="me-2" /> +91 7379623345</p>
          </div>

          {/* Social */}
          <div className="col-md-2 mb-4 text-md-end">
            <h5 className="footer-title">Follow</h5>
            <div className="footer-social">
              <a href="#"><FaGithub /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <hr className="footer-divider" />

        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Adarsh. All Rights Reserved.
          </p>

          {/* Scroll To Top */}
          <a href="#home" className="scroll-top">
            <FaArrowUp />
          </a>
        </div>

      </div>
    </footer>
  );
};
