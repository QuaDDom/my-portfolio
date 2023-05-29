import React from "react";
import "./Button.scss";
import { IoMdArrowForward } from "react-icons/io";

export default function Button() {
  return (
    <button className="button" data-cursor-size={70} data-cursor-exclusion>
      <span className="arrow">
        <IoMdArrowForward />
      </span>
      Submit
    </button>
  );
}
