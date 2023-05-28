import { Spacer } from "@nextui-org/react";
import React from "react";
import ScrollStaggerText from "../Text/ScrollStaggerText";
import "./Contact.scss";
import Line from "../Global/Line";

export default function Contact() {
  return (
    <div className="contact section">
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
      <Spacer />
    </div>
  );
}
