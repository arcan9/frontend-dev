import React from "react";
import { RoughNotation } from "react-rough-notation";
import kitty from "../images/indy.gif";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <section className='about fade-in-text'>
        <h1>
          <RoughNotation
            type='box'
            color='#dd831c'
            show={true}
            animationDelay={1300}
            animationDuration={1000}
            iterations={3}
          >
            About
          </RoughNotation>
        </h1>
        <div>
          <h2>
            Ashelle • <small>/ə&apos;ʃɛl/</small> • <small>uh-shell</small>
          </h2>
          ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt quod
          inventore delectus repellendus hic at perferendis sed ipsum quas
          voluptate iusto a, placeat quam. Architecto et veritatis possimus
          aliquam, asperiores porro repudiandae quisquam ratione est! Esse,
          magnam placeat praesentium totam molestias nesciunt quas quasi id sunt
          eligendi unde. Delectus placeat impedit voluptatem a ad architecto
          temporibus, vero voluptatibus nemo!
        </div>
        <div className='selfie'>
          <img src={kitty} alt='me' />
        </div>
      </section>
    </Layout>
  );
}
