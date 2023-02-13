import React from "react";
// import Context from "../Context";

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
      <ProjectSection />
      <Tech />
      <Contact />
    </>
    // {/* </Context.Provider> */}
  );
}
