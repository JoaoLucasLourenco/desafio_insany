"use client";

import Image from "next/image";
import { AboutWrapper } from "./style";

const About = () => {
  return (
    <AboutWrapper>
      <section className="aboutTexts">
        <span className="cta">
          <h1>Conheça nossas solução customizadas</h1>
          <p>
            Suscipit pellentesque praesent auctor molestie massa nunc vitae
            felis eget est ut gravida in maecenas. Tempus in in in congue proin.
          </p>
        </span>
        <div className="verified">
          <span>
            <Image
              src={"check.svg"}
              height={24}
              width={24}
              alt="Ícone de check"
            />
            <p>Sagittis sed cursus sed malesuada ultrices </p>
          </span>
          <span>
            <Image
              src={"check.svg"}
              height={24}
              width={24}
              alt="Ícone de check"
            />
            <p>Cras faucibus tristique volutpat accumsan</p>
          </span>
          <span>
            <Image
              src={"check.svg"}
              height={24}
              width={24}
              alt="Ícone de check"
            />
            <p>Sagittis sed cursus sed malesuada ultrices </p>
          </span>
        </div>
        <button>Quero ser cliente</button>
        <span className="contactUs">
          <Image
            src={"phoneIcon.svg"}
            height={20}
            width={13}
            alt="Ícone de check"
          />
          <p>Fale conosco</p>
        </span>
      </section>
      <section className="aboutImage"></section>
    </AboutWrapper>
  );
};

export default About;
