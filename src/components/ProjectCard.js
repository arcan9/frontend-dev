import React from "react";
// import { Link } from "react-router-dom";

export default function ProjectCard({ title, image, externalLink }) {
  return (
    <div className='card'>
      <a href={externalLink} target='_blank' rel='noopener noreferrer'>
        <img src={image} alt='app screenshot' />
      </a>
      <h3 className='project-title'>
        <a href={externalLink} target='_blank' rel='noopener noreferrer'>
          {title}
        </a>
      </h3>
    </div>
  );
}
