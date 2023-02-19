import React from "react";
import { RoughNotation } from "react-rough-notation";
import kitty from "../images/indy.gif";

export default function About() {
  return (
    <section className='about fade-in-text'>
      <h1>
        <RoughNotation
          type='box'
          color='#dd831c'
          show={true}
          animationDelay={500}
          animationDuration={1000}
          iterations={3}
        >
          About
        </RoughNotation>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt
        quod inventore delectus repellendus hic at perferendis sed ipsum quas
        voluptate iusto a, placeat quam. Architecto et veritatis possimus
        aliquam, asperiores porro repudiandae quisquam ratione est! Esse, magnam
        placeat praesentium totam molestias nesciunt quas quasi id sunt eligendi
        unde. Delectus placeat impedit voluptatem a ad architecto temporibus,
        vero voluptatibus nemo!
      </p>
      <div className='selfie'>
        <img src={kitty} alt='me' />
      </div>
    </section>
  );
}
