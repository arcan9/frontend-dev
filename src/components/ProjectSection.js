import React from "react";
import { Link } from "react-router-dom";

import ProjectCard from "./ProjectCard";

export default function ProjectSection({ setProjectView }) {
  return (
    <div className='project-grid'>
      <ProjectCard
        title='Nekkoh'
        summary='This is project Nekkoh'
        setProjectView={setProjectView}
      />
      <ProjectCard
        title='Code Journal'
        summary='This is project Code Journal'
      />
      <button type='button' onClick={() => setProjectView(true)}>
        <Link to='/project-one'>More Info</Link>
      </button>
      <button type='button' onClick={() => setProjectView(true)}>
        <Link to='/project-two'>More Info</Link>
      </button>
    </div>
  );
}
