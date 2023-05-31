import React from "react";
import { useTheme, Text } from "@nextui-org/react";
import ScrollStaggerText from "../Text/ScrollStaggerText";
import ViewProjects from "../Projects/ViewProjects";
import "./Projects.scss";
import Line from "../Global/Line";

export default function Projects() {
  return (
    <div className="projects section" style={{ height: "124vh" }} id="projects">
      <ScrollStaggerText
        text={"Recent Works"}
        fontSize={100}
        fontFamily={"'Averta-Semibold', serif"}
        height={150}
        duration={1}
        stagger={50}
        triggerAfter={300}
      />
      <Line />
      <ViewProjects />
    </div>
  );
}
