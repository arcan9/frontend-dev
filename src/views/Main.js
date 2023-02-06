import React, { useState, useMemo } from "react";
import Context from "../Context";

// My components
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import About from "./About";
import ProjectSection from "../components/ProjectSection";
import ProjectOne from "./ProjectOne";

export default function Main() {
  const [aboutView, setAboutView] = useState(false);
  const [projectView, setProjectView] = useState(false);
  // const [projectTwoView, setProjectTwoView] = useState(false);

  const contextValue = useMemo(
    () => ({
      aboutView,
      projectView
    }),
    [aboutView, projectView]
  );

  return (
    <Context.Provider value={contextValue}>
      <Navigation />
      {aboutView ? <About /> : <Header setAboutView={setAboutView} />}
      {projectView ? (
        <ProjectOne />
      ) : (
        <ProjectSection setProjectView={setProjectView} />
      )}
    </Context.Provider>
  );
}
