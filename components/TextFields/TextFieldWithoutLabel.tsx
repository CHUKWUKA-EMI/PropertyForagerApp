import React, { FC } from "react";
import StyledInput, { StyledTextFieldProps } from "./StyledInput";

const TextFieldWithoutLabel: FC<StyledTextFieldProps> = ({
  label,
  ...props
}) => {
  return <StyledInput {...props} />;
};

export default TextFieldWithoutLabel;
