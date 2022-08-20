import React, { useState } from "react";
import { useTheme, Text } from "@nextui-org/react";
import "./Nav.scss";
import Button from "./Button";
import Menu from "./Menu";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Menu isOpen={isOpen} />
      <nav className="navigation">
        <Text size={24}>Mateo Leal</Text>
        <Button
          handleClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
          isOpen={isOpen}
        />
      </nav>
    </>
  );
}
