import { Spacer } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import ScrollStaggerText from "../Text/ScrollStaggerText";
import "./Contact.scss";
import Line from "../Global/Line";
import Button from "../Global/Button";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it is visible
        }
      },
      { threshold: 0.5 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    const email = "quaddomdev@gmail.com";
    const subject = "Contact me";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    window.open(mailtoLink);
  };

  return (
    <div className="contact section" id="contact" ref={componentRef}>
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
      <div
        className="emailButtonContainer"
        data-cursor-size={90}
        data-cursor-exclusion
      >
        {isVisible && (
          <div
            className="emailButton"
            data-cursor-size={90}
            data-cursor-exclusion
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p onClick={handleClick}>SEND ME AN EMAIL</p>
          </div>
        )}
      </div>
      {/* <Button /> */}
    </div>
  );
}
