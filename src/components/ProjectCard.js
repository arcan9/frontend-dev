import React from "react";

export default function ProjectCard({ title, summary }) {
  return (
    <div className='card'>
      <p>{title}</p>
      <p>{summary}</p>
      <button type='button'>More Info</button>
    </div>
  );
}
