import React from "react";
// import { Link } from "react-router-dom";

export default function ProjectCard({ title, summary }) {
  return (
    <div className='card'>
      <p>{title}</p>
      <p>{summary}</p>
    </div>
  );
}
