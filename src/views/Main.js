import React from "react";
// import Context from "../Context";
import kitty from "../images/indy.gif";

// My components
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";
import Tech from "../components/Tech";
import Contact from "../components/Contact";

export default function Main() {
  return (
    // <Context.Provider>
    <>
      <Navigation />
      <Header />
      <Tech />
      <ProjectSection />
      <div className='kitty'>
        <img src={kitty} alt='kitty illustration' />
      </div>
      <Contact />
    </>
    // {/* </Context.Provider> */}
  );
}
