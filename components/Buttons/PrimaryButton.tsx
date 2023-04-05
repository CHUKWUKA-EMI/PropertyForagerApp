import React, { FC } from "react";
import StyledButton, { StyledButtonProps } from "./StyledButton";

const PrimaryButton: FC<StyledButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

export default PrimaryButton;
