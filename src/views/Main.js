import React, { useState } from "react";
// import Context from "../Context";
import kitty from "../images/indy.gif";

// My components
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";
import Tech from "../components/Tech";
import Contact from "../components/Contact";
import About from "./About";

export default function Main() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  return (
    <section>
      {isButtonClicked ? (
        <About />
      ) : (
        <>
          <Navigation />
          <Header setIsButtonClicked={setIsButtonClicked} />
          <Tech />
          <ProjectSection />
          <div className='kitty'>
            <img src={kitty} alt='kitty illustration' />
          </div>
          <Contact />
        </>
      )}
    </section>
  );
}
