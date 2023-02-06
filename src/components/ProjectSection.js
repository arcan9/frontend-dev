import React from "react";
import { Link } from "react-router-dom";

import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <div className='project-grid'>
      <ProjectCard title='NEKKOH' summary='This is project Nekkoh' />
      <ProjectCard
        title='CODE JOURNAL'
        summary='This is project Code Journal'
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
  );
}
