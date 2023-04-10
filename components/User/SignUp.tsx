import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SimpleDialog from "../Modals/SimpleDialog";

interface IProps {
  openSignupForm: boolean;
  handleClose: () => void;
}
const SignUp: FC<IProps> = ({ openSignupForm = false, handleClose }) => {
  return (
    <SimpleDialog
      handleClose={handleClose}
      open={openSignupForm}
      modalTitle="Create your account"
    ></SimpleDialog>
  );
};

export default SignUp;
