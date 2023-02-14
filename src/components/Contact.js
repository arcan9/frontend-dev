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
        <label htmlFor='full-name'>Full Name</label>
        <input
          type='text'
          placeholder='FULL NAME'
          required={true}
          id='full-name'
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='EMAIL ADDRESS'
          required={true}
          id='email'
        />
        <label htmlFor='message'>Message</label>
        <textarea
          placeholder='TYPE HERE...🌱'
          rows='7'
          required={true}
          id='message'
        />
        <button type='submit' className='button'>
          Send <i className='fa-solid fa-arrow-right' />
        </button>
      </form>
    </section>
  );
}
