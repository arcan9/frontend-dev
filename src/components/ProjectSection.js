import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "./projects-data";
// import nekkoh from "../images/nekkoh.png";
// import codejournal from "../images/codejournal.png";

import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [next, setNext] = useState("next");

  const handlePrev = () => {
    setNext("prev");
    // below calculates the previous of the data
    // making sure to loop to through the array when direction buttons are clicked
    setCurrentIndex((currentIndex + projects.length - 1) % projects.length);
  };

  const handleNext = () => {
    setNext("next");
    // below calculates the next of the data
    // making sure to loop to through the array when direction buttons are clicked
    setCurrentIndex((currentIndex + projects.length + 1) % projects.length);
  };

  return (
    <section className='project-bg'>
      <h3 className='projects-header'>Projects</h3>
      <div className='project-grid grid'>
        <ProjectCard
          // data at the current index from the `projects` object is passed as prop
          title={projects[currentIndex].title}
          summary={projects[currentIndex].summary}
          image={projects[currentIndex].image}
          next={next}
        />
        <Link to={projects[currentIndex].link}>
          <button type='button' className='project-btn button'>
            Detail
          </button>
        </Link>
        <div className='controls'>
          <button type='button' onClick={handlePrev} className='button'>
            <i className='fa-solid fa-arrow-left' />
          </button>
          <button type='button' onClick={handleNext} className='button'>
            <i className='fa-solid fa-arrow-right' />
          </button>
        </div>
      </div>
    </section>
  );
}
