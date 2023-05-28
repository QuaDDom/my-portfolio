import React from "react";
import "./Project.scss";

interface Props {
  img: string;
  title: string;
  githubLink: string;
}

export default function Project({ img, title, githubLink }: Props) {
  return (
    <div
      className="project"
      data-cursor-text="View Project"
      data-cursor-size="90px"
      data-cursor-color="#242424"
    >
      <img src={img} alt={title} className="projectImg" />
    </div>
  );
}
