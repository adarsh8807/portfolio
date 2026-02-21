import React from "react";
import { Button } from "@mui/material";

export const Navbar = () => {

  const handleResumeClick = () => {
    window.open("/public/resume_adarsh.pdf", "_blank");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">

        <a className="navbar-brand fw-bold text-info" href="#">
          Adarsh.dev
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

            <li className="nav-item">
              <Button
                variant="contained"
                size="small"
                onClick={handleResumeClick}
                sx={{
                  backgroundColor: "#0dcaf0",
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  "&:hover": { backgroundColor: "#0bb6d6" },
                }}
              >
                Resume
              </Button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
