import React from "react";
import { TextField, Button } from "@mui/material";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./contact.css";

export const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 gradient-text">
          Contact Me
        </h2>

        <div className="row">

          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <div className="contact-card p-4">

              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />

              <TextField
                label="Your Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
              />

              <TextField
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                margin="normal"
              />

              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  background: "linear-gradient(45deg, #00c6ff, #0072ff)",
                }}
              >
                Send Message
              </Button>

            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 d-flex align-items-center">
            <div className="contact-info">

              <h5>Let’s Connect 🚀</h5>
              <p className="mt-3">
                I’m open to internships, projects, and collaborations.
                Feel free to reach out!
              </p>

              <div className="social-links mt-4">
                <a href="https://github.com/adarsh8807"><FaGithub size={28} /></a>
                <a href="https://www.linkedin.com/in/adarshpandey-software/"><FaLinkedin size={28} /></a>
                <a href="#"><FaEnvelope size={28} /></a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
