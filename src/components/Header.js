import React from "react";
import { Link } from "react-router-dom";
import image from "../images/undraw_dev_focus_re_6iwt.svg";

export default function Header() {
  return (
    <section className='hero grid'>
      <p className='intro-text'>
        Illustrator turned developer. Coming from the creative world, I love
        tinkering with the frontend side of things, but I also have experience
        putting together a backend structure. One of my ultimate goals as a
        developer is to be a great storyteller, and incorporate facets of design
        such as colors and imagery to achieve this.
        <br />
        <Link to='/about'>
          <button type='button' className='button hero-btn'>
            More Info
          </button>
        </Link>
      </p>
      <div className='hero-image'>
        <img src={image} alt='header' />
      </div>
    </section>
  );
}
