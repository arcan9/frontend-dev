import React from "react";
import { RoughNotation } from "react-rough-notation";
import catPlaytime from "../images/Cat_Playtime.png";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <section className='about fade-in-text'>
        <h1>
          <RoughNotation
            type='box'
            color='#dd831c'
            show={true}
            animationDelay={1300}
            animationDuration={1000}
            iterations={3}
          >
            About
          </RoughNotation>
        </h1>
        <div className='about-text'>
          <h2>
            Ashelle • <small>/ə&apos;ʃɛl/</small> • <small>uh-shell</small>
          </h2>
          <p>
            I&apos;m a creative who&apos;s fallen in love with web development.
            Previously, I designed personalized artwork for customers, drawing
            inspiration from a charming and lively style similar to
            illustrations found in storybooks. Now, in my role as a developer, I
            strive to infuse this same cheerful and inviting aesthetic into my
            creations for web and mobile applications. I also appreciate an
            uncluttered and polished design. My aim is to develop apps that
            convey a distinct message, while also entertaining and providing a
            memorable experience for users. Combining my tech knowledge with my
            love for art has been a fun experience so far in my journey. 💛
          </p>
          <p>
            <strong>Interests</strong> (besides coding): adventure/puzzle games,
            vintage book illustrations, concept art, Agatha Christie(-esque)
            books, cute animals
          </p>
        </div>
        <div className='selfie'>
          <img src={catPlaytime} alt='me' />
        </div>
      </section>
    </Layout>
  );
}
