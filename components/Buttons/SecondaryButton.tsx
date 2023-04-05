import React, { FC } from "react";
import StyledButton, { StyledButtonProps } from "./StyledButton";

const SecondaryButton: FC<StyledButtonProps> = (props) => {
  return <StyledButton color="secondary" {...props} />;
};

export default SecondaryButton;
