import React from "react";
import "../styles/global.css";

export default function Home() {
  return (
    <div className="container">
      {/* Header */}
      <header>
        <h1>Rebecca Monroy</h1>
        <p>Software Engineer | Oracle Certified Java SE 17 Professional</p>
        <p>Santa Tecla, La Libertad, El Salvador | rebecca.monroyg5@gmail.com | (+503) 7478-6551</p>
        <p>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"> Twitter</a> | 
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </p>
      </header>

      {/* Career Objective */}
      <section className="objective">
        <h2>Career Objective</h2>
        <p>
          Dynamic and results-driven Software Engineer with expertise in Java development and Salesforce customization. 
          Passionate about solving complex problems with innovative solutions. Seeking a challenging role to leverage my skills 
          and drive success in a forward-thinking organization.
        </p>
      </section>

      {/* Experience */}
      <section className="experience">
        <h2>Experience</h2>
        <div className="job">
          <h3>Java Developer, TELUS International Digital Solutions</h3>
          <p><em>October 2022 - July 2023, San Salvador</em></p>
          <ul>
            <li>Spearheaded development of robust Java components using OOP, JDBC, and Servlets.</li>
            <li>Built enterprise-level applications with Spring, Hibernate, and JPA.</li>
            <li>Architected RESTful web services for seamless front-end integration.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Salesforce Developer, Silverline Central America</h3>
          <p><em>July 2021 - October 2021, San Salvador</em></p>
          <ul>
            <li>Customized Salesforce with Apex, Visualforce, triggers, and components.</li>
            <li>Created reports and dashboards tailored to client needs.</li>
            <li>Managed deployments and security settings for data integrity.</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Java:</strong> OpenJDK 14, Spring Boot, Spring Security, Hibernate, JPA</li>
          <li><strong>Frontend:</strong> JavaScript/TypeScript, Angular 8, React (Gatsby)</li>
          <li><strong>Databases:</strong> SQL (MySQL, PostgreSQL), NoSQL (MongoDB, Redis)</li>
          <li><strong>Cloud:</strong> AWS (EC2, S3, Lambda), Oracle Cloud Infrastructure</li>
          <li><strong>DevOps:</strong> Git, Docker, CI/CD (Jenkins, GitHub Actions)</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Oracle Certified Professional: Java SE 17 Developer</li>
          <li>Oracle Cloud Infrastructure 2024 Generative AI Certified Professional</li>
          <li>Salesforce Certified Platform Developer I</li>
          <li>Full list available on <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </section>

      {/* Education */}
      <section className="education">
        <h2>Education</h2>
        <p><strong>B.S. in Computer Science</strong>, Universidad Tecnológica de El Salvador, May 2024</p>
        <p><strong>B.A. in English Literature</strong>, Universidad Tecnológica de El Salvador, December 2018</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Rebecca Monroy. All rights reserved.</p>
      </footer>
    </div>
  );
}