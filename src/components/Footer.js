import React, { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const updateYear = () => setCurrentYear(new Date().getFullYear());

  useEffect(() => {
    updateYear();
  }, []);

  return (
    <footer>
      <div className='grid footer-section'>
        <p className='copyright'>Coded & illustrated by me ©{currentYear}</p>
        <ul className='social'>
          <li>
            <a
              href='https://linkedin.com/in/ashelle-cancio'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa-brands fa-linkedin' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/arcan9'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa-brands fa-square-github' />
            </a>
          </li>
          <li>
            <a
              href='https://ravensketches.myportfolio.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa-solid fa-brush' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
