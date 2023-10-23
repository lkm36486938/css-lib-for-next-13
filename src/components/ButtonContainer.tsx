import { css } from "../../styled-system/css";
import CustomButton from "./Button";

const containerStyle = css({
  width: "300px",
  height: "80px",
});

const ButtonContainer = () => {
  return <CustomButton cssProps={containerStyle} />;
};

export default ButtonContainer;
