import React from "react";
import { LinearProgress, Box } from "@mui/material";
import "./skills.css";

const skills = [
  {
    name: "HTML",
    level: 90,
    image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    name: "CSS",
    level: 85,
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    name: "JavaScript",
    level: 80,
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "React",
    level: 75,
    image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  },
  {
    name: "Bootstrap",
    level: 85,
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
  },
  {
    name: "Java",
    level: 70,
    image: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
  },
  {
    name: "C++",
    level: 70,
    image: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
  },
  {
    name: "DBMS",
    level: 75,
    image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  },
  {
    name: "Python",
    level: 80,
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  },
  {
    name: "Excel",
    level: 85,
    image: "https://cdn-icons-png.flaticon.com/512/732/732220.png",
  },
  {
    name: "Data Analytics",
    level: 70,
    image: "https://cdn-icons-png.flaticon.com/512/4341/4341139.png",
  },
  {
    name: "Figma",
    level: 65,
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 gradient-text">
          My Skills
        </h2>

        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="skill-card p-4 text-center">

                <img
                  src={skill.image}
                  alt={skill.name}
                  className="skill-icon"
                />

                <h5 className="mt-3">{skill.name}</h5>

                <Box className="mt-3">
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                  />
                </Box>

                <p className="mt-2">{skill.level}%</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
