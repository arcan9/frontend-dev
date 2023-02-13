import React from "react";

export default function Contact() {
  return (
    <section className='contact'>
      <h3 className='leading'>Get in Touch</h3>
      <p>
        If you&apos;d like to chat about a cool job opportunity or project,
        contact me on{" "}
        <a
          href='https://linkedin.com/in/ashelle-cancio'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='outer-link'>linkedin</span>
        </a>{" "}
        or send a message using the form below!
      </p>
      <form>
        <input type='text' placeholder='FULL NAME' required={true} />
        <input type='email' placeholder='EMAIL ADDRESS' required={true} />
        <textarea placeholder='TYPE HERE...🌱' rows='7' required={true} />
        <button type='submit' className='button'>
          Send <i className='fa-solid fa-arrow-right' />
        </button>
      </form>
    </section>
  );
}
