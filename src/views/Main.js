import React, { useState } from "react";
import Context from "../Context";

// My components
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import About from "./About";
import ProjectSection from "../components/ProjectSection";

export default function Main() {
  const [aboutView, setAboutView] = useState(false);

  return (
    <Context.Provider value={aboutView}>
      <Navigation />
      {aboutView ? <About /> : <Header setAboutView={setAboutView} />}
      <ProjectSection />
    </Context.Provider>
  );
}
