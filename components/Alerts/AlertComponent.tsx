import React, { FC, useState } from "react";
import Alert from "@mui/material/Alert";

interface IProps {
  severity: "error" | "warning" | "info" | "success";
  message: string;
}

const AlertComponent: FC<IProps> = ({ severity, message }) => {
  return (
    <Alert variant="filled" severity={severity}>
      {message}
    </Alert>
  );
};

export default AlertComponent;
