import React from "react";
import { Link } from "react-router-dom";
import image from "../images/undraw_dev_focus_re_6iwt.svg";

export default function Header({ setAboutView }) {
  return (
    <>
      <img src={image} alt='header' />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
        asperiores minus perspiciatis necessitatibus expedita ratione aliquam
        placeat rerum velit earum?
      </p>
      <button type='button' onClick={() => setAboutView(true)}>
        <Link to='/about'>More Info</Link>
      </button>
    </>
  );
}
