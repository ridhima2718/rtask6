import React from "react";
import port from "./image/port.jpg";
import './about.css';


function About() {
  return (
    <section id="about">
      <h2>Get To Know Me</h2>
      <p className="intro">Hello. Welcome to my portfolio page.</p>
      <p id="me">
        My name is Ridhima Taneja. I am a beginner MERN Stack Web Developer. I
        have built various websites using HTML, CSS, Bootstrap and React JS
        technologies.I am also a full time student at the Vellore Institute of
        Technology.
      </p>
      <img src={port} alt="Me"></img>
    </section>
  );
}

export default About;
