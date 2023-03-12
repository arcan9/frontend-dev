import React from "react";
import { Link } from "react-router-dom";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
// import image from "../images/Watering Plant_Isometric.svg";
import catPlant from "../images/Cat_Plant.png";

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
          <span style={{ "--i": 6 }} className='hello'>
            !
          </span>
        </h1>
        <RoughNotationGroup show={true}>
          <p className='leading'>
            I&apos;m a{" "}
            <RoughNotation
              type='highlight'
              color='#d4e236'
              animationDelay={1300}
              animationDuration={700}
            >
              developer
            </RoughNotation>{" "}
            and{" "}
            <RoughNotation
              type='underline'
              color='#dd831c'
              padding={2}
              animationDelay={1100}
              animationDuration={600}
            >
              illustrator
            </RoughNotation>
          </p>
          LA-based, full stack developer with a deep interest in{" "}
          <RoughNotation
            type='circle'
            // padding={[2, 4]}
            color='#f2be57'
            animationDelay={1100}
            animationDuration={500}
          >
            frontend
          </RoughNotation>
          &nbsp;and intuitive experiences. Self-driven,{" "}
          <RoughNotation
            type='highlight'
            color='#ffd54f'
            padding={2}
            animationDelay={1100}
            animationDuration={500}
          >
            collaborative,
          </RoughNotation>{" "}
          and friendly :) Fan of video games, mystery books, and cats. My
          ultimate goal as a developer is to master the art of{" "}
          <RoughNotation
            type='box'
            padding={2}
            color='#dd831c'
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
        <img src={catPlant} alt='header' />
      </div>
    </section>
  );
}
