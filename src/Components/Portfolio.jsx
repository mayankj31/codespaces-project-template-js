import React from "react";
import Image1 from "../images/img1.jpg";
import Image2 from "../images/img2.jpg";
import Image3 from "../images/img3.jpg";
import Image4 from "../images/img4.jpg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Event Management Platform",
    description:
      "Built using Angular, this platform allows users to browse, search, and manage events seamlessly. Key features include intuitive navigation, event browsing, search functionality, responsive design, and a carousel for showcasing featured events.",
    url: "https://github.com/mayankj31/event-management-platform",
    image: Image1,
  },
  {
    title: "Weather Monitoring System",
    description:
      "Drove the coding efforts of an IOT based weather monitoring system built using ESP8266 & other sensors, which wirelessly transmits real-time weather parameters to a web interface for easy monitoring.",
    url: "https://github.com/mayankj31/ESP-based-Weather-Monitoring-System",
    image: Image2,
  },
  {
    title: "Client Management Dashboard",
    description:
      "Built a responsive Client Management Dashboard with a React frontend and Node.js/Express backend. The system supports full CRUD operations, MySQL integration, and PDF generation for a seamless desktop experience.",
    url: "https://github.com/mayankj31/Client-Management-Dashboard",
    image: Image3,
   },
  {
    title: "Housing and Mortgage Portal",
    description:
      "Created a responsive web page for customer login and mortgage management, featuring smooth animations, interactive tooltips, form validation with a password toggle, and custom CSS animations for an engaging user experience.",
    url: "https://github.com/mayankj31/frontend-housing-page",
    image: Image4,
  },
];

const Portfolio = () => {
  return (
    <section className="padding portfolio-section" id="portfolio">
      <div className="portfolio-content">
        <h2>Portfolio</h2>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3>{project.title}</h3>
                <p className="small">{project.description}</p>
                <img src={project.image} alt={`${project.title} preview`} className="hover-image" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;