import React from "react";
import { Link } from "react-router-dom";
import nekkoh from "../images/nekkoh.jpg";
import codejournal from "../images/codejournal.jpg";

import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section className='project-bg'>
      <div className='project-grid grid'>
        <ProjectCard
          title='NEKKOH'
          summary='This is project Nekkoh'
          image={nekkoh}
        />
        <ProjectCard
          title='CODE JOURNAL'
          summary='This is project Code Journal'
          image={codejournal}
        />

        <Link to='/project-one'>
          <button type='button' className='project-btn button'>
            Detail
          </button>
        </Link>

        <Link to='/project-two'>
          <button type='button' className='project-btn button'>
            Detail
          </button>
        </Link>
      </div>
    </section>
  );
}
