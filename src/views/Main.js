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
            <div className='wave'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path
                  fill='#669413'
                  fillOpacity='1'
                  d='M0,128L80,144C160,160,320,192,480,197.3C640,203,800,181,960,192C1120,203,1280,245,1360,266.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
                />
              </svg>
            </div>
            <ProjectSection />
            <div className='wave'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path
                  fill='#669413'
                  fillOpacity='1'
                  d='M0,128L80,144C160,160,320,192,480,197.3C640,203,800,181,960,192C1120,203,1280,245,1360,266.7L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
                />
              </svg>
            </div>
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
