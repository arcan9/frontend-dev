import React from "react";
// import Context from "../Context";

// My components
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";

export default function Main() {
  return (
    // <Context.Provider>
    <>
      <Navigation />
      <Header />
      <ProjectSection />
    </>
    // {/* </Context.Provider> */}
  );
}
