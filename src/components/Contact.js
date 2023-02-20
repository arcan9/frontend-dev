import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const form = useRef();
  const confirmSent = () => toast.success("Thank you! Message sent.");
  const errorSent = () =>
    toast.error("Something went wrong! Message was not sent.");

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        result => {
          console.log(result.text);
          confirmSent();
        },
        error => {
          console.log(error.text);
          errorSent();
        }
      );
    e.target.reset();
  };
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
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor='full-name'>Full Name</label>
        <input
          type='text'
          placeholder='FULL NAME'
          required={true}
          id='full-name'
          name='user_name'
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='EMAIL ADDRESS'
          required={true}
          id='email'
          name='user_email'
        />
        <label htmlFor='message'>Message</label>
        <textarea
          placeholder='TYPE HERE...🌱'
          rows='7'
          required={true}
          id='message'
          name='message'
        />
        <button type='submit' className='button'>
          Send <i className='fa-solid fa-arrow-right' />
        </button>
      </form>
      <Toaster />
    </section>
  );
}
