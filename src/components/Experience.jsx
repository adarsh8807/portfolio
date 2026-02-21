import React from "react";
import "./experience.css";

const experiences = [
  {
    title: "OJT - QR Attendance System",
    place: "Semester 3 On-the-Job Training",
    year: "2025",
    desc: "Developed a QR-based attendance system using Python and Tkinter with database integration.",
  },
  {
    title: "Waste Management Web App",
    place: "Personal Project",
    year: "2025",
    desc: "Built a web platform for collecting food and e-waste using React, Bootstrap and MongoDB.",
  },
  {
    title: "AQI Live Monitoring App",
    place: "Flutter Project",
    year: "2025",
    desc: "Created a live AQI monitoring mobile application with API integration and data visualization.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="experience-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 gradient-text">
          Experience
        </h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <h5>{exp.title}</h5>
                <small>{exp.place} | {exp.year}</small>
                <p className="mt-2">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
