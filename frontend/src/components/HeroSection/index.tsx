"use client";
import HeroForm from "../HeroForm";
import HeroText from "../HeroTexts";
import { Section } from "./style";

const Hero = () => {
  return (
    <Section>
      <HeroText></HeroText>
      <HeroForm></HeroForm>
    </Section>
  );
};
export default Hero;
