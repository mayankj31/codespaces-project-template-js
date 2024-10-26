/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I’m Mayank Jugran, an aspiring software developer with expertise in JavaScript, React, and MongoDB. I create responsive, interactive applications and have experience with implementing CRUD functionality, server-side pagination, and IoT solutions like a smart attendance system. Passionate about delivering efficient solutions, I’m always ready to tackle new challenges.";

const skillsList = [
  "C/C++", 
  "Python", 
  "Data Structures and Algorithms", 
  "Object Oriented Programming", 
  "MySQL", 
  "IOT", 
  "Javascript",
  "React", 
  "MongoDB", 
  "Node JS"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Aspiring Software Professional with a solid foundation in Python, C/C++, and web development. Skilled in building responsive web applications using Angular and React. Passionate about crafting efficient solutions and continuously enhancing technical expertise. Strong problem-solving skills and a dedication to innovation drive my commitment to contributing effectively to company goals.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor:"white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;