import React from "react";

export default function ProjectCard({ title, summary, setProjectView }) {
  return (
    <div className='card'>
      <p>{title}</p>
      <p>{summary}</p>
      <button type='button' onClick={() => setProjectView(true)}>
        More Info
      </button>
    </div>
  );
}
