import React from "react";
// import { Link } from "react-router-dom";

export default function ProjectCard({ title, summary, image }) {
  return (
    <div className='card'>
      <h3 className='project-title'>{title}</h3>
      <img src={image} alt='app screenshot' />
      <p>{summary}</p>
    </div>
  );
}
