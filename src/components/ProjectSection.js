import React from "react";

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
    </div>
  );
}
