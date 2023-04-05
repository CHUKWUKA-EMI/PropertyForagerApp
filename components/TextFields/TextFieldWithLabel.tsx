import React, { FC } from "react";
import StyledInput, { StyledTextFieldProps } from "./StyledInput";

const TextFieldWithLabel: FC<StyledTextFieldProps> = (props) => {
  return <StyledInput {...props} />;
};

export default TextFieldWithLabel;
