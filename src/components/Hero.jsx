import React from "react";
import { Button } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import me from "../assets/me.jpeg";
import "./Hero.css";

export const Hero = () => {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold">
              Hi, I'm <span className="gradient-text">Adarsh</span>
            </h1>

            <h3 className="mt-3 text-light">
              Full Stack Developer 🚀
            </h3>

            <p className="mt-3 text-secondary">
              Passionate IT student building modern web applications 
              using React, Bootstrap and modern technologies.
            </p>

            <div className="mt-4 d-flex gap-3 justify-content-center justify-content-md-start">
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(45deg, #00c6ff, #0072ff)",
                }}
              >
                Download Resume
              </Button>

              <Button variant="outlined" color="info">
                Hire Me
              </Button>
            </div>

            <div className="mt-4 d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#" className="social-icon">
                <FaGithub size={28} />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>

          <div className="col-md-6 text-center mt-5 mt-md-0">
            <img
              src={me}
              alt="profile"
              className="hero-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
