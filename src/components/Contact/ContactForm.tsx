import React, { useEffect, useRef, useState } from "react";
import "./ContactForm.scss";
import { Input, Textarea } from "@nextui-org/react";

function ContactForm() {
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

  return (
    <div className="contactFormContainer">
      <div className="inputsContainer">
        <div className="inputContainer">
          <Input
            className="nextInput"
            clearable
            underlined
            labelPlaceholder="Full name"
            width="620px"
            size="xl"
          />
        </div>
        <div className="inputContainer">
          <Input
            className="nextInput"
            clearable
            underlined
            labelPlaceholder="Email"
            width="620px"
            size="xl"
          />
        </div>
        <div className="inputContainer">
          <Textarea
            className="nextInput"
            labelPlaceholder="Subject"
            minRows={5}
            width="620px"
            size="xl"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
