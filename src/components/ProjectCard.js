import React from "react";
// import { Link } from "react-router-dom";

export default function ProjectCard({ title, summary }) {
  return (
    <div className='card'>
      <h3 className='project-title'>{title}</h3>
      <p>{summary}</p>
    </div>
  );
}
