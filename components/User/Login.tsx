import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SimpleDialog from "../Modals/SimpleDialog";
import TextFieldWithLabel from "../TextFields/TextFieldWithLabel";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined";
import PrimaryButton from "../Buttons/PrimaryButton";
import Link from "next/link";

interface IProps {
  openLoginForm: boolean;
  handleClose: () => void;
}

const Login: FC<IProps> = ({ openLoginForm = false, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SimpleDialog
      maxWidth="md"
      fullWidth={true}
      sx={{ width: { xs: "95%", sm: "60%", md: "50%", lg: "40%" }, mx: "auto" }}
      handleClose={handleClose}
      open={openLoginForm}
      modalTitle="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        component="form"
        sx={{ py: 2 }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TextFieldWithLabel
          fullWidth
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextFieldWithLabel
          fullWidth
          type={showPassword ? "text" : "password"}
          name="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            ),
          }}
        />
        <PrimaryButton
          fullWidth
          type={"submit"}
          disableElevation
          variant="contained"
        >
          Login
        </PrimaryButton>
        <Typography>
          Don&apos;t have an account yet? <Link href="/signup">Sign up</Link>
        </Typography>
      </Box>
    </SimpleDialog>
  );
};

export default Login;
