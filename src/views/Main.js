import React from "react";
import Context from "../Context";

// My components
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";

export default function Main() {
  // const [aboutView, setAboutView] = useState(false);
  // const [projectView, setProjectView] = useState(false);
  // const [projectTwoView, setProjectTwoView] = useState(false);

  // const contextValue = useMemo(
  //   () => ({
  //     aboutView,
  //     projectView
  //   }),
  //   [aboutView, projectView]
  // );

  return (
    <Context.Provider>
      <Navigation />
      <Header />
      <ProjectSection />
    </Context.Provider>
  );
}
