import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className='site-nav grid'>
      <h1>React Folio</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='#projects'>Projects</Link>
        </li>
        <li>
          <Link to='#contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
