import React from "react";
// import { Link } from "react-router-dom";

export default function ProjectCard({ title, image, externalLink, next }) {
  return (
    <div className={`card ${next} active`}>
      <img src={image} alt='app screenshot' />
      <h3 className='project-title'>
        <a href={externalLink} target='_blank' rel='noopener noreferrer'>
          {title}
        </a>
      </h3>
    </div>
  );
}
