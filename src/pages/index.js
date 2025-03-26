import React, { useState } from "react";
import Layout from "../components/layout";
import "../styles/global.css";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [certfilter, certsetFilter] = useState("all");

  const projects = [
    { id: 1, title: "Java REST API", desc: "A RESTful API built with Spring Boot and PostgreSQL.", link: "https://github.com/yourprofile/java-api", category: "java" },
    { id: 2, title: "Salesforce Dashboard", desc: "Custom Salesforce dashboard with Apex and Visualforce.", link: "https://github.com/yourprofile/salesforce-project", category: "salesforce" },
    { id: 3, title: "Portfolio Site", desc: "This site, built with Gatsby and React.", link: "https://github.com/yourprofile/portfolio", category: "frontend" },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  const certifications = [
    { id: 1, title: "Oracle Certified Professional, Java EE 7 Application Developer", desc: "The Oracle Java EE 7 Application Developer has demonstrated the capability to develop and deploy applications using Java Platform, Enterprise Edition 7. They have also shown expertise utilizing Java EE 7 technology to create web-based user interfaces using JavaScript along with JSPs, JSFs, servlets and handling business logic.", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=63ED403AADBFC3D964D12BCEB6D12A5ACE02F89C6B30687BD94582888A356DF1", category: "oracle" },
    { id: 2, title: "Oracle Certified Professional: Java SE 17 Developer", desc: "An Oracle Certified Professional: Java SE 17 Developer has demonstrated proficiency in Java (Standard Edition) software development recognized by a wide range of world-wide industries. They have also exhibited thorough and broad knowledge of the Java programming language, coding practices, and utilization of new features incorporated into Java SE 17. By passing the required exam, a certified individual proves tremendous fluency in Java SE and the acquisition of the valuable professional skills required to be a Java software developer.", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3080B50148D48B0FB6DADC6CEE0367F1BB8AB88694A3402ADB6C18DCE8A38B36", category: "oracle" },
    { id: 3, title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate", desc: "The Oracle Cloud Infrastructure (OCI) Foundations certification is for individuals who intend to demonstrate fundamental knowledge of public cloud services provided by Oracle Cloud Infrastructure (OCI). This certification is for candidates with non-technical backgrounds, such as those involved in selling or procuring cloud solutions, as well as those with a technical background who want to validate their foundational-level knowledge around core OCI services. This exam does not require any hands-on technical experience and is not a prerequisite for taking any other OCI certifications.", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=34BC73C0A4D3BB39BA8A6DD152D77AC09B937A89CB25A1E3153082DB0057951F", category: "oracle" },
    { id: 4, title: "Oracle Cloud Data Management 2022 Foundations Certified Associate", desc: "The Oracle Cloud Data Management Foundations certification is intended for individuals looking to demonstrate fundamental knowledge of data management services provided by Oracle. This certification is targeted towards candidates with non-technical backgrounds such as those involved in selling or procuring cloud solutions, as well as those with a technical background who want to validate their foundational-level knowledge around core Oracle Data Management services. This exam does not require any hands-on technical experience and is not a prerequisite for taking any other Oracle certifications.", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6DB38210940C80C7ECA969142543DCE6B3202005985E4E9508DC29230C46E3C8", category: "oracle" },
    { id: 5, title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate", desc: "The Oracle Cloud Infrastructure (OCI) Foundations certification is for individuals who intend to demonstrate fundamental knowledge of public cloud services provided by Oracle Cloud Infrastructure (OCI). This certification is for candidates with non-technical backgrounds, such as those involved in selling or procuring cloud solutions, as well as those with a technical background who want to validate their foundational-level knowledge around core OCI services. This exam does not require any hands-on technical experience and is not a prerequisite for taking any other OCI certifications.", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=34BC73C0A4D3BB39BA8A6DD152D77AC09B937A89CB25A1E3153082DB0057951F", category: "oracle" },
    { id: 6, title: "Oracle Cloud Data Management 2023 Certified Foundations Associate", desc: "The Oracle Cloud Data Management Foundations certification is intended for individuals looking to demonstrate fundamental knowledge of data management services provided by Oracle. This certification is targeted towards candidates with non-technical backgrounds such as those involved in selling or procuring cloud solutions, as well as those with a technical background who want to validate their foundational-level knowledge around core Oracle Data Management services. This exam does not require any hands-on technical experience and is not a prerequisite for taking any other Oracle certifications.",link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6DB38210940C80C7ECA969142543DCE69B88041F51F84D5F329BB06AF9C5EECD", category: "oracle" },
    { id: 7, title: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate", desc: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=2655FA5360145702704E336ED2158795F3174C0DF6AB8508ABC787A72D5E5FD8", category: "oracle" },
    { id: 8, title: "Oracle Certified Associate, Oracle WebLogic Server 12c Administrator", desc: "An Oracle Certified Associate, Oracle WebLogic Server 12c Administrator has demonstrated the ability to set up server environments, tune performance and troubleshoot. He or she also understands features and how Dynamic Clusters and Elastic JMS make it easier to deploy WLS in a private or public cloud, or both.",link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6B317E5A214250550897FFE7A83B2811204634BAA322D8C11AEA65D3F88344D9", category: "oracle" },
    { id: 9, title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",desc: "The Oracle Cloud Infrastructure 2024 Generative AI Professional certification is designed for Software Developers, Machine Learning/AI Engineers, and Gen AI Professionals. The prerequisite for this course includes a basic understanding of Machine Learning and Deep Learning concepts and experience with Python language. Individuals who earn this credential have a strong understanding of the Large Language Models (LLMs) and are skilled at using OCI Generative AI Service. They are also familiar with techniques such as Retrieval-Augmented Generation, Semantic Search, Vector database, and LangChain, to build, trace, evaluate, and deploy LLM applications.", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=2B0D9D5A427E1AF3DBA9818E90A9B3E9E883706DC7C488A26D1E4A30A9FD4108", category: "oracle" },
    { id: 10, title: "Salesforce Certified Administrator", desc: "This certification focuses on the skills needed to manage and configure the Salesforce platform. It covers using Salesforce features and capabilities to maximize the platform's utility for an organization. Skills include using Salesforce Lightning, Salesforce Classic, Salesforce Setup, Data Loader, and security settings.", link: "https://www.salesforce.com/trailblazer/profile/", category: "salesforce" },
    { id: 11, title: "Salesforce Certified Platform App Builder", desc: "This certification validates the ability to design, build, and implement custom applications on the Salesforce Platform using its declarative customization capabilities. Tools covered include Salesforce Lightning, Process Builder, Flow Builder, and Schema Builder.", link: "https://www.salesforce.com/trailblazer/profile/", category: "salesforce" },
    { id: 12, title: "Salesforce Certified Platform Developer I", desc: "This certification assesses the skills to develop and deploy custom business logic and user interfaces using the programmatic capabilities of the Lightning Platform. It involves extending the Lightning Platform using Apex and Visualforce. Tools include Salesforce Lightning, Apex, Visualforce, Salesforce CLI, and SOQL. ", link: "https://www.salesforce.com/trailblazer/profile/", category: "salesforce" },
  ];

  const filteredCerts = certfilter === "all" ? certifications : certifications.filter(c => c.category === certfilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>Welcome!</h1>
        <p>I'm Rebecca Monroy, a Java and Salesforce expert ready to build impactful solutions.</p>
      </section>

      {/* About Me */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Dynamic and results-driven Software Engineer with expertise in Java development and Salesforce customization. 
          Passionate about solving complex problems with innovative solutions.
        </p>
        <p><strong>Location:</strong> Santa Tecla, La Libertad, El Salvador</p>
        <p><strong>Date of Birth:</strong> 03/05/1995 | <strong>Nationality:</strong> Salvadoran</p>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="job">
          <h3>Java Developer, TELUS International Digital Solutions</h3>
          <p><em>October 2022 - July 2023, San Salvador</em></p>
          <ul>
            <li>Spearheaded development of robust Java components using OOP, JDBC, and Servlets.</li>
            <li>Built enterprise-level applications with Spring, Hibernate, and JPA.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Salesforce Developer, Silverline Central America</h3>
          <p><em>July 2021 - October 2021, San Salvador</em></p>
          <ul>
            <li>Customized Salesforce with Apex, Visualforce, and triggers.</li>
            <li>Created client-specific reports and dashboards.</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul>
          <li><strong>Java:</strong> OpenJDK 14, Spring Boot, Spring Security, Hibernate, JPA</li>
          <li><strong>Frontend:</strong> JavaScript/TypeScript, Angular 8, React (Gatsby)</li>
          <li><strong>Databases:</strong> SQL (MySQL, PostgreSQL), NoSQL (MongoDB, Redis)</li>
          <li><strong>Cloud:</strong> AWS (EC2, S3, Lambda), Oracle Cloud Infrastructure</li>
          <li><strong>DevOps:</strong> Git, Docker, CI/CD (Jenkins, GitHub Actions)</li>
        </ul>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section">
      <h2>Certifications</h2>
        <div className="cert-filters">
          <button onClick={() => certsetFilter("all")} className={certfilter === "all" ? "active" : ""}>All Certifications</button>
          <button onClick={() => certsetFilter("oracle")} className={certfilter === "oracle" ? "active" : ""}>Oracle Certifications</button>
          <button onClick={() => certsetFilter("salesforce")} className={certfilter === "salesforce" ? "active" : ""}>Salesforce Certifications</button>
        </div>
        {filteredCerts.map(cert => (
          <div key={cert.id} className="project">
            <h3>{cert.title}</h3>
            <p>{cert.desc}</p>
          </div>
        ))}
      </section>

      {/* My Projects */}
      <section id="projects" className="section">
        <h2>My Projects</h2>
        <div className="project-filters">
          <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>All</button>
          <button onClick={() => setFilter("java")} className={filter === "java" ? "active" : ""}>Java</button>
          <button onClick={() => setFilter("salesforce")} className={filter === "salesforce" ? "active" : ""}>Salesforce</button>
          <button onClick={() => setFilter("frontend")} className={filter === "frontend" ? "active" : ""}>Frontend</button>
        </div>
        {filteredProjects.map(project => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </section>

      {/* Contact Me */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p><strong>Email:</strong> rebecca.monroyg5@gmail.com</p>
        <p><strong>Phone:</strong> (+503) 7478-6551</p>
        <p>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"> Twitter</a> | 
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </p>
        <p><a href="/assets/resume.pdf" download>Download Resume</a></p>
      </section>

      {/* Send a message */}
      <section id="contact" className="section">
        <h2>Send a message</h2>
        <form action="https://formspree.io/f/mqapldje" method="POST" className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        </section>
    </Layout>
  );
}