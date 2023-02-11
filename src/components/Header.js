import React from "react";
import { Link } from "react-router-dom";
import image from "../images/Watering Plant_Isometric.svg";

export default function Header() {
  return (
    <section className='hero grid'>
      <h1 className='greeting'>
        <span style={{ "--i": 1 }}>H</span>
        <span style={{ "--i": 2 }}>E</span>
        <span style={{ "--i": 3 }}>L</span>
        <span style={{ "--i": 4 }}>L</span>
        <span style={{ "--i": 5 }}>O</span>
        <span style={{ "--i": 6 }}>,</span>
        &nbsp;
        <span style={{ "--i": 7 }}>I</span>
        <span style={{ "--i": 8 }}>&apos;</span>
        <span style={{ "--i": 9 }}>M</span>
        <br />
        <span style={{ "--i": 10 }}>A</span>
        <span style={{ "--i": 11 }}>S</span>
        <span style={{ "--i": 12 }}>H</span>
        <span style={{ "--i": 13 }}>E</span>
        <span style={{ "--i": 14 }}>L</span>
        <span style={{ "--i": 15 }}>L</span>
        <span style={{ "--i": 16 }}>E</span>
      </h1>
      <p className='leading'>Developer and illustrator. ✿</p>
      <p className='intro-text'>
        LA-based. Full stack developer with a deep interest in frontend
        exploration and intuitive experiences. Self-driven, collaborative, and
        friendly :) Fan of video games, mystery books, and cats. My ultimate
        goal as a developer is to master the art of storytelling, and use
        captivating colors and visuals to enhance the narrative experience.
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
