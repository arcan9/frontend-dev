import React from "react";
import { Link } from "react-router-dom";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
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
        , I&apos;M
        <br />
        ASHELLE
      </h1>
      <p className='leading'>Developer and illustrator. ✿</p>
      <p className='intro-text'>
        <RoughNotationGroup show={true}>
          LA-based. Full stack{" "}
          <RoughNotation
            type='highlight'
            color='#e8ea5b'
            animationDelay={1000}
            animationDuration={800}
          >
            developer
          </RoughNotation>{" "}
          with a deep interest in frontend exploration and intuitive
          experiences.{" "}
          <RoughNotation
            type='highlight'
            color='#ffd54f'
            animationDelay={900}
            animationDuration={800}
          >
            Self-driven,
          </RoughNotation>{" "}
          <RoughNotation
            type='underline'
            color='#dd831c'
            padding={2}
            animationDelay={1000}
            animationDuration={500}
          >
            collaborative, and friendly
          </RoughNotation>{" "}
          :) Fan of video games, mystery books, and cats. My ultimate goal as a
          developer is to master the{" "}
          <RoughNotation
            type='circle'
            color='#4d9632'
            animationDelay={1000}
            animationDuration={500}
          >
            art of storytelling
          </RoughNotation>
          , and use captivating colors and visuals to enhance the narrative
          experience.
        </RoughNotationGroup>
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
