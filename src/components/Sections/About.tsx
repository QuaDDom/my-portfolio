import React from "react";
import { useTheme, Text, Spacer } from "@nextui-org/react";
import StaggerText from "../Text/StaggerText";
import "./About.scss";
import SkillCarrousel from "../Global/SkillCarrousel";
import ScrollStaggerText from "../Text/ScrollStaggerText";
import InfoCard from "../About/InfoCard";
import Line from "../Global/Line";

export default function About() {
  return (
    <div className="about section" id="about">
      <div className="aboutMe">
        <ScrollStaggerText
          text={"About me"}
          fontSize={100}
          fontFamily={"'Averta-Semibold', serif"}
          height={150}
          duration={1}
          stagger={50}
          triggerAfter={300}
          className="aboutTitle"
        />
        <Line />
        <Spacer />
        <ScrollStaggerText
          text={`I am a developer passionate about web development`}
          fontSize={40}
          fontFamily={"'Averta-Semibold', serif"}
          height={59}
          duration={1}
          wordSpacing={0}
          stagger={50}
          triggerAfter={500}
          className="aboutText"
        />
        <ScrollStaggerText
          text={`and design. I like to offer great usability and experience`}
          fontSize={40}
          fontFamily={"'Averta-Semibold', serif"}
          height={59}
          duration={1}
          stagger={50}
          triggerAfter={1500}
          className="aboutText"
        />
        <ScrollStaggerText
          text={`to my clients and users`}
          fontSize={40}
          fontFamily={"'Averta-Semibold', serif"}
          height={59}
          duration={1}
          stagger={50}
          triggerAfter={2500}
          className="aboutText"
        />
        <div className="info">
          <InfoCard
            title="UI/UX Design"
            description="I'm highly skilled in UI/UX design, proficient in Photoshop, Figma, and other design tools. I create visually appealing and user-friendly interfaces, combining aesthetics and functionality seamlessly. With attention to detail and a deep understanding of design principles, I deliver exceptional designs that engage users. I continuously refine my skills to stay up-to-date with industry trends, ensuring every project exceeds expectations."
            delay={3000}
          />
          <InfoCard
            title="Web development"
            description="With over 2 years of experience in web development, I am proficient in JavaScript, CSS, SCSS, HTML, Pug, ReactJS, NextJS, and more. I create dynamic and responsive websites that deliver exceptional user experiences. With a deep understanding of front-end development principles, I write clean and maintainable code. I stay updated with the latest industry trends to ensure cutting-edge solutions. I am passionate about web development and dedicated to delivering high-quality results that bring your vision to life."
            delay={3350}
          />
          <InfoCard
            title="Backend development"
            description="While my expertise is primarily focused on frontend development, I also have experience in backend technologies such as Node.js, Express, Mongoose, and MongoDB. I strive to create seamless integration between frontend and backend components, ensuring a cohesive user experience. While I excel in frontend development, I possess a solid understanding of backend concepts and can build robust APIs and manage databases."
            delay={3700}
          />
        </div>
      </div>
    </div>
  );
}
