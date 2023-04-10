import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SimpleDialog from "../Modals/SimpleDialog";

interface IProps {
  openLoginForm: boolean;
  handleClose: () => void;
}

const Login: FC<IProps> = ({ openLoginForm = false, handleClose }) => {
  return (
    <SimpleDialog
      handleClose={handleClose}
      open={openLoginForm}
      modalTitle="Sign in"
    ></SimpleDialog>
  );
};

export default Login;
