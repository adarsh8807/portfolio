import React from "react";
import { Button } from "@mui/material";
import aqi1 from "../assets/aqi1.jpeg";
import aqi2 from "../assets/aqi2.jpeg";
import "./projects.css";

const projects = [
  {
    title: "Waste Management System",
    image: aqi1,
    tech: "React, Bootstrap, MongoDB",
  },
  {
    title: "AQI Live App",
    image: aqi2,
    tech: "Flutter, API Integration",
  },
  {
    title: "QR Attendance System",
    image: "https://source.unsplash.com/600x400/?qr,code",
    tech: "Python, Tkinter, Database",
  },
  {
    title: "E-Commerce Website",
    image: "https://source.unsplash.com/600x400/?ecommerce",
    tech: "React, Node.js",
  },
  {
    title: "Portfolio Website",
    image: "https://source.unsplash.com/600x400/?developer",
    tech: "React, Bootstrap, MUI",
  },
  {
    title: "Data Analytics Dashboard",
    image: "https://source.unsplash.com/600x400/?dashboard,data",
    tech: "Excel, Python",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 gradient-text">
          My Projects
        </h2>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="project-card">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />

                <div className="project-overlay">
                  <h5>{project.title}</h5>
                  <p>{project.tech}</p>

                  <div className="d-flex gap-2 mt-3 justify-content-center">
                    <Button variant="contained" size="small">
                      Live Demo
                    </Button>
                    <Button variant="outlined" size="small" color="inherit">
                      Code
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
