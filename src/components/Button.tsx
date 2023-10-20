"use client";

import { useState } from "react";
import { css } from "../../styled-system/css";

const buttonStyle = (active: boolean) =>
  css({ backgroundColor: active ? "lightgreen" : "beige", color: "#333" });

const CustomButton = () => {
  const [active, setActive] = useState<boolean>(false);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <button onClick={onClick} className={buttonStyle(active)}>
      Hello
    </button>
  );
};

export default CustomButton;
