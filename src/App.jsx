import React, { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./locomotive-scroll.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

const siteProps = {
  name: "Mayank Jugran",
  title: "Software Developer",
  email: "mayankjugran81@gmail.com",
  gitHub: "microsoft",
  linkedIn: "satyanadella"
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  const [scrollInstance, setScrollInstance] = useState(null);

  useEffect(() => {
    // Initialize Locomotive Scroll with modified options
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main-content"),
      smooth: true,
      lerp: 0.1,
      scrollFromAnywhere: true,
      reloadOnContextChange: true,
      // Add resetNativeScroll option
      resetNativeScroll: false
    });

    setScrollInstance(scroll);

    // Handle navigation clicks
    const handleNavClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          scroll.scrollTo(target, {
            offset: -100, // Adjust this value based on your header height
            duration: 1000,
            easing: [0.25, 0.00, 0.35, 1.00]
          });
        }
      }
    };

    // Add click handlers to navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      // Cleanup
      scroll.destroy();
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div id="main-content">
        <Home name={siteProps.name} title={siteProps.title} />
        <About />
        <Portfolio />
        <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </div>
    </div>
  );
};

export default App;