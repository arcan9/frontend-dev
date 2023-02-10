import React from "react";
// import { Link } from "react-router-dom";

export default function ProjectCard({ title, image }) {
  return (
    <div className='card'>
      <img src={image} alt='app screenshot' />
      <h3 className='project-title'>{title}</h3>
    </div>
  );
}
