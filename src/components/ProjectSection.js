import React from "react";
import { Link } from "react-router-dom";
import nekkoh from "../images/nekkoh.png";
import codejournal from "../images/codejournal.png";

import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section className='project-bg'>
      <h3 className='projects-header'>Projects</h3>
      <div className='project-grid grid'>
        <ProjectCard
          title='NEKKOH'
          summary='This is project Nekkoh'
          image={nekkoh}
        />
        <Link to='/project-one'>
          <button type='button' className='project-btn button'>
            Detail
          </button>
        </Link>
        <ProjectCard
          title='CODE JOURNAL'
          summary='This is project Code Journal'
          image={codejournal}
        />
        <Link to='/project-two'>
          <button type='button' className='project-btn button'>
            Detail
          </button>
        </Link>
      </div>
    </section>
  );
}
