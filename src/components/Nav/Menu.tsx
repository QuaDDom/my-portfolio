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
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div className={`menuContainer ${isOpen && "open"}`}>
      <div className={`menu ${isOpen && "open"}`}>
        <div className="options">
          <Text
            size={85}
            data-cursor-size={50}
            data-cursor-exclusion
            className="option"
          >
            About
          </Text>
          <Text
            size={85}
            data-cursor-size={50}
            data-cursor-exclusion
            className="option"
          >
            Intro
          </Text>
          <Text
            size={85}
            data-cursor-size={50}
            data-cursor-exclusion
            className="option"
          >
            Projects
          </Text>
          <div className="reachMe"></div>
        </div>
        <div className="contactEmail"></div>
      </div>
      <div className={`transitionBg ${isOpen && "open"}`} />
    </div>
  );
}
