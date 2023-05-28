import React, { useState } from "react";
import { useTheme, Text, Link, Switch } from "@nextui-org/react";
import "./Nav.scss";
import Button from "./Button";
import Menu from "./Menu";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useTheme as useNextTheme } from "next-themes";
import { ImStackoverflow } from "react-icons/im";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useNextTheme();
  const { theme, isDark } = useTheme();
  return (
    <>
      <Menu isOpen={isOpen} />
      <nav className="navigation">
        <Text size={24} className="name">
          Mateo Leal
        </Text>
        <div className="spacer">
          <div className="social">
            <Link
              className="link"
              href="https://github.com/QuaDDom"
              target="_blank"
              data-cursor-size={50}
            >
              <BsGithub />
            </Link>
            <Link
              className="link"
              href="https://twitter.com/LeQuaddom"
              target="_blank"
              data-cursor-size={50}
            >
              <AiFillTwitterCircle />
            </Link>
            <Link className="link" href="/" data-cursor-size={50}>
              <ImStackoverflow />
            </Link>
          </div>
          {/* <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          /> */}
          <Button
            handleClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
            isOpen={isOpen}
          />
        </div>
      </nav>
    </>
  );
}
