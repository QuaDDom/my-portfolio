import { Spacer } from "@nextui-org/react";
import React from "react";
import ScrollStaggerText from "../Text/ScrollStaggerText";
import "./Contact.scss";
import Line from "../Global/Line";
import Button from "../Global/Button";

export default function Contact() {
  return (
    <div className="contact section" id="contact">
      <ScrollStaggerText
        text={"Contact"}
        fontSize={100}
        fontFamily={"'Averta-Semibold', serif"}
        height={150}
        duration={1.1}
        stagger={50}
        triggerAfter={300}
        className="aboutTitle"
      />
      <Line />
      <ScrollStaggerText
        text={"Building digital experiences that leave lasting impressions"}
        fontSize={50}
        fontFamily={"'Averta-Semibold', serif"}
        height={75}
        duration={1.1}
        stagger={50}
        triggerAfter={400}
      />
      <ScrollStaggerText
        text={"let's create something extraordinary together."}
        fontSize={50}
        fontFamily={"'Averta-Semibold', serif"}
        height={75}
        duration={1.1}
        stagger={50}
        triggerAfter={1500}
      />
      <Spacer />
      <Button />
    </div>
  );
}
