import React from 'react';
import cp from "./image/cp.jpg";
import word from "./image/word.jpg";
import calc from "./image/calc.jpg";
import './projects.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Some of my projects</h2>
      <div className='card1'><img src={cp} alt="Colour Picker"></img><a href="https://task3-sable.vercel.app/">A Colour Picker Application</a></div>
      <div className='card1'><img src={word} alt="Word Counter"></img><a href="https://task1-liart.vercel.app/">A Word Counter Application</a></div>
      <div className='card1'><img src={calc} alt="Calculator"></img><a href="https://task2-gold.vercel.app/">A Calculator Application</a></div>
    </section>
  );
}

export default Projects;
