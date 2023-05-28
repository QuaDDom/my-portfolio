import React from "react";
import Project from "./Project";
import "./ViewProjects.scss";

export default function ViewProjects() {
  return (
    <div className="projectGrid">
      <Project
        img="./projects/snow.png"
        title=""
        githubLink="https://github.com/QuaDDom/snow-net"
      />
      <Project
        img="./projects/cpm.png"
        title=""
        githubLink="https://github.com/QuaDDom/landing-cpm"
      />
      <Project
        img="./projects/skewscroll.png"
        title=""
        githubLink="https://github.com/QuaDDom/awwwards-skew-scroll-remake"
      />
      <Project
        img="./projects/threejs.png"
        title=""
        githubLink="https://github.com/QuaDDom/threejs-enviroment"
      />
    </div>
  );
}
