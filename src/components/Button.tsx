"use client";

import { useState } from "react";
import { css, cx } from "../../styled-system/css";

const buttonStyle = (active: boolean) =>
  css({ backgroundColor: active ? "lightgreen" : "beige", color: "#333" });

type CustomButtonProps = {
  cssProps?: string;
};

const CustomButton = (props: CustomButtonProps) => {
  const { cssProps } = props;
  const [active, setActive] = useState<boolean>(false);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <button onClick={onClick} className={cx(buttonStyle(active), cssProps)}>
      Hello
    </button>
  );
};

export default CustomButton;
