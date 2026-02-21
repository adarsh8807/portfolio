import React from "react";
import { Card, CardContent } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import me from "../assets/me.jpeg";
import "./About.css";

export const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0 fade-in">
            <img
              src={me}
              alt="about"
              className="about-img"
            />
          </div>

          {/* Right Content */}
          <div className="col-md-7 fade-in-delay">

            <h2 className="fw-bold mb-4 gradient-text">
              About Me
            </h2>

            <h5 className="typewriter-text mb-3">
              <Typewriter
                words={[
                  "Full Stack Developer 🚀",
                  "React Developer ⚛️",
                  "Creative Problem Solver 💡",
                  "Java Developer ☕",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h5>

            <p className="text-light mb-3">
              I am a passionate IT student focused on building modern,
              scalable web applications using React, Bootstrap, and
              cutting-edge technologies.
            </p>

            <p className="text-light mb-3">
              I enjoy working on real-world projects like Waste Management
              Systems, AQI Monitoring Apps, and QR Attendance Systems.
            </p>

            <Card className="mt-3 about-card glass-card">
              <CardContent>
                <h6>🎓 Education</h6>
                <p className="mb-1">
                  SY-BSc IT – Chandrabhan Sharma College
                </p>
                <p className="mb-0">
                  HSC & SSC – First Class Passed
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};
