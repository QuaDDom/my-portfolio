import React from "react";
import "./Menu.scss";
import { useTheme, Text, Switch, Link } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImStackoverflow } from "react-icons/im";

interface Props {
  isOpen: boolean;
}

export default function Menu({ isOpen }: Props) {
  // const { setTheme } = useNextTheme();
  // const { isDark, type } = useTheme();

  const hadleClick = (id: string) => {
    const section = document.getElementById(id);
    console.log(section);
    if (section) {
      const { top } = section.getBoundingClientRect();
      window.scrollTo({
        top: window.pageYOffset + top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`menuContainer ${isOpen && "open"}`}>
      <div className={`menu ${isOpen && "open"}`}>
        <div className="options">
          <Text
            size={85}
            data-cursor-size={50}
            data-cursor-exclusion
            className="option"
            onClick={() => hadleClick("intro")}
          >
            Intro
          </Text>
          <Text
            size={85}
            data-cursor-size={50}
            data-cursor-exclusion
            className="option"
            onClick={() => hadleClick("about")}
          >
            About
          </Text>
          <Text
            size={85}
            data-cursor-size={50}
            data-cursor-exclusion
            className="option"
            onClick={() => hadleClick("projects")}
          >
            Projects
          </Text>
          <Text
            size={85}
            data-cursor-size={50}
            data-cursor-exclusion
            className="option"
            onClick={() => hadleClick("contact")}
          >
            Contact
          </Text>
          <div className="reachMe"></div>
        </div>
        <div className="contactEmail"></div>
      </div>
      <div className={`transitionBg ${isOpen && "open"}`} />
    </div>
  );
}
