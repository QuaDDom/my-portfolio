import React, { useState, useEffect } from "react";
import "./StaggerText.scss";
import { useTheme, Text } from "@nextui-org/react";

const StaggerTextLetter = ({
  letter,
  index,
  reverse,
  animate,
  unit,
  direction,
  fontSize,
  wordSpacing,
  stagger,
  duration,
  stroke,
  ...props
}: any) => (
  <Text
    style={{
      transition: "0.3s",
      transform:
        reverse == null || reverse == "" || reverse == false || reverse !== true
          ? animate
            ? `translateY(0${unit == null || unit == "" ? "px" : unit})`
            : `translateY(${
                direction == null || direction == "" || direction !== "down"
                  ? fontSize == null || fontSize == 0
                    ? 48
                    : fontSize
                  : fontSize == null || fontSize == 0
                  ? -48
                  : -fontSize
              }${unit == null || unit == "" ? "px" : unit})`
          : animate
          ? `translateY(${
              direction == null || direction == "" || direction !== "down"
                ? fontSize == null || fontSize == 0
                  ? -48
                  : -fontSize
                : fontSize == null || fontSize == 0
                ? 48
                : fontSize
            }${unit == null || unit == "" ? "px" : unit})`
          : `translateY(0${unit == null || unit == "" ? "px" : unit})`,
      transitionDelay: `${((duration == null || duration == 0
        ? 0.7
        : duration) /
        (stagger == null || stagger == 0 ? 60 : stagger)) *
        index}s`,
      transitionDuration: `${
        duration == null || duration == 0 ? 0.7 : duration
      }s`,
      transitionTimingFunction: "ease-in-out",
      transitionProperty: "transform",
      fontSize: `${fontSize == 0 || fontSize == null ? 48 : fontSize}${
        unit == null || unit == "" ? "px" : unit
      }`,
    }}
    className={`stagger-animation-character ${stroke ? "text name" : ""}`}
    {...props}
  >
    {letter === " " ? (
      <Text
        className={stroke ? "text name" : ""}
        css={{
          fontSize: `${
            wordSpacing == null || wordSpacing == 0
              ? fontSize == 0 || fontSize == null
                ? 48
                : fontSize
              : wordSpacing
          }${unit == null || unit == "" ? "px" : unit}`,
        }}
      >
        &nbsp;
      </Text>
    ) : (
      letter
    )}
  </Text>
);

const StaggerTextReveal = ({
  text = "<text placeholder>",
  triggerAfter,
  height,
  fontSize,
  unit,
  width,
  reverse,
  direction,
  duration,
  stagger,
  wordSpacing,
  style,
  stroke,
  ...props
}: any) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, triggerAfter || 0);
  });

  if (typeof text !== "string" || text.length === 0) {
    throw new Error("Wrong text property");
  }

  const lettersComponents = [];

  for (let i = 0; i < text.length; i++) {
    lettersComponents.push(
      <StaggerTextLetter
        key={i}
        letter={text[i]}
        index={i}
        reverse={reverse}
        animate={animate}
        unit={unit}
        direction={direction}
        fontSize={fontSize}
        wordSpacing={wordSpacing}
        stagger={stagger}
        duration={duration}
        stroke={stroke}
        {...props}
      />
    );
  }

  return (
    <div
      //className="stagger-animation-text"
      style={{
        ...style,
        overflow: "hidden",
        height: `${
          height == 0 || height == null
            ? fontSize == 0 || fontSize == null
              ? 48
              : fontSize
            : height
        }${unit == null || unit == "" ? "px" : unit}`,
        width: `${width == 0 || width == null ? "" : width}${
          unit == null || unit == "" ? "px" : unit
        }`,
        display: "flex",
      }}
    >
      {lettersComponents}
    </div>
  );
};

export default StaggerTextReveal;
