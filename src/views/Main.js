import React, { useState } from "react";
// import Context from "../Context";
import kitty from "../images/indy.gif";

// My components
import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";
import Tech from "../components/Tech";
import Contact from "../components/Contact";
import About from "./About";
import Layout from "../components/Layout";

export default function Main() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <Layout>
      <section>
        {isButtonClicked ? (
          <About />
        ) : (
          <>
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
    </Layout>
  );
}
