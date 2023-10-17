"use client";

/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const buttonStyle = css`
  background-color: blue;
  color: white;
`;

const CustomButton = () => {
  const onClick = () => {
    console.log("onClick");
  };

  return (
    <button onClick={onClick} css={buttonStyle}>
      Hello
    </button>
  );
};

export default CustomButton;
