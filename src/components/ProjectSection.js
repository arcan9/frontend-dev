import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { projects } from "./projects-data";

// My components
import ProjectCard from "./ProjectCard";
import ControlButtons from "./ControlButtons";

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    // below calculates the previous index of the data
    // making sure to loop to through the array when direction buttons are clicked
    setCurrentIndex((currentIndex + projects.length - 1) % projects.length);
  };

  const handleNext = () => {
    // below calculates the next index of the data
    // making sure to loop to through the array when direction buttons are clicked
    setCurrentIndex((currentIndex + projects.length + 1) % projects.length);
  };

  // Media queries from `react-responsive` dependency assigned to variables
  const isSmallTabletOrPhone = useMediaQuery({ maxWidth: 960 });
  const isLargeTabletOrLaptop = useMediaQuery({ minWidth: 960 });

  return (
    <section className='project-bg'>
      <h3 className='projects-header'>Projects</h3>
      <div className='project-grid grid'>
        {/** Two cards are rendered if this media query is true */}
        {isLargeTabletOrLaptop && (
          <>
            <ProjectCard
              title={projects[0].title}
              summary={projects[0].summary}
              image={projects[0].image}
              externalLink={projects[0].external}
              tagline={projects[0].tagline}
            />
            <ProjectCard
              title={projects[1].title}
              summary={projects[1].summary}
              image={projects[1].image}
              externalLink={projects[1].external}
              tagline={projects[1].tagline}
            />
            <ProjectCard
              title={projects[2].title}
              summary={projects[2].summary}
              image={projects[2].image}
              externalLink={projects[2].external}
              tagline={projects[2].tagline}
            />
          </>
        )}
        {/** One card is rendered if this media query is true */}
        {isSmallTabletOrPhone && (
          <>
            <ProjectCard
              // data at the current index from the `projects` object is passed as prop
              title={projects[currentIndex].title}
              summary={projects[currentIndex].summary}
              image={projects[currentIndex].image}
              externalLink={projects[currentIndex].external}
            />
            <ControlButtons handleNext={handleNext} handlePrev={handlePrev} />
          </>
        )}
      </div>
      {/* <Link to={projects[currentIndex].link}>
        <button type='button' className='project-btn button'>
          Detail
        </button>
      </Link> */}
    </section>
  );
}
