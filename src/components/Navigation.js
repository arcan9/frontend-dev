import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className='site-nav grid'>
      {/* <h1>Ashelle&apos;s Folio</h1> */}
      <ul className='nav-links'>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/about'>ABOUT</Link>
        </li>
        <li>
          <Link to='#projects'>PROJECTS</Link>
        </li>
        <li>
          <Link to='#contact'>GET IN TOUCH</Link>
        </li>
      </ul>
    </nav>
  );
}
