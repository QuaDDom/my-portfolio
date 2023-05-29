import React from "react";
import "./Button.scss";

export default function Button() {
  return (
    <button className="button" data-cursor-size={70} data-cursor-exclusion>
      Contact Me
    </button>
  );
}
