import React, { useState } from "react";
import { Link } from "gatsby";
import "../styles/global.css";

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <nav className="navbar">
        <h1 className="logo">Rebecca Monroy</h1>
        <div className="nav-right">
          <ul className="nav-links">
          <li><Link to="#home">Home</Link></li>
            <li><Link to="#about">About Me</Link></li>
            <li><Link to="#experience">Experience</Link></li>
            <li><Link to="#skills">Skills</Link></li>
            <li><Link to="#certifications">Certifications</Link></li>
            <li><Link to="#projects">My Projects</Link></li>
            <li><Link to="#contact">Contact Me</Link></li>
          </ul>
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Rebecca Monroy. All rights reserved.</p>
      </footer>

      {/* Back to Top Button */}
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        ↑ Top
      </button>
    </div>
  );
}