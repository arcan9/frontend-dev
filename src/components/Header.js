import React from "react";
import { Link } from "react-router-dom";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import image from "../images/Watering Plant_Isometric.svg";

export default function Header({ setIsButtonClicked }) {
  return (
    <section className='hero grid'>
      <div className='intro-text'>
        <h1 className='greeting'>
          <span style={{ "--i": 1 }} className='hello'>
            H
          </span>
          <span style={{ "--i": 2 }} className='hello'>
            E
          </span>
          <span style={{ "--i": 3 }} className='hello'>
            L
          </span>
          <span style={{ "--i": 4 }} className='hello'>
            L
          </span>
          <span style={{ "--i": 5 }} className='hello'>
            O
          </span>
          , it&apos;s
          <br />
          Ashelle
        </h1>
        <p className='leading'>Developer and illustrator. ✿</p>
        <RoughNotationGroup show={true}>
          LA-based, full stack{" "}
          <RoughNotation
            type='highlight'
            color='#d4e236'
            animationDelay={1300}
            animationDuration={800}
          >
            developer
          </RoughNotation>{" "}
          with a deep interest in frontend exploration and intuitive
          experiences.{" "}
          <RoughNotation
            type='highlight'
            color='#ffd54f'
            animationDelay={1300}
            animationDuration={800}
          >
            Self-driven,
          </RoughNotation>{" "}
          <RoughNotation
            type='underline'
            color='#dd831c'
            padding={2}
            animationDelay={1100}
            animationDuration={500}
          >
            collaborative, and friendly
          </RoughNotation>{" "}
          :) Fan of video games, mystery books, and cats. My ultimate goal as a
          developer is to master the art of{" "}
          <RoughNotation
            type='circle'
            color='#4d9632'
            animationDelay={1100}
            animationDuration={500}
          >
            storytelling
          </RoughNotation>
          , and use beautiful colors and visuals to enhance the narrative
          experience.
        </RoughNotationGroup>
        <br />
        <Link to='/about'>
          <button
            type='button'
            className='button hero-btn'
            onClick={() => setIsButtonClicked(true)}
          >
            More Info
          </button>
        </Link>
      </div>
      <div className='hero-image'>
        <img src={image} alt='header' />
      </div>
    </section>
  );
}
