import React from "react";
// import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  image,
  externalLink,
  tagline,
  github
}) {
  return (
    <div className='card'>
      <a href={externalLink} target='_blank' rel='noopener noreferrer'>
        <img src={image} alt='app screenshot' />
      </a>
      <h3 className='project-title'>
        <a href={externalLink} target='_blank' rel='noopener noreferrer'>
          {title} <i className='fa-solid fa-arrow-up-right-from-square' />
        </a>
      </h3>
      <p className='project-tagline'>{tagline}</p>
      <hr />
      <div>
        <a href={github} target='_blank' rel='noopener noreferrer'>
          Github <i className='fa-solid fa-arrow-up-right-from-square' />
        </a>
      </div>
    </div>
  );
}
