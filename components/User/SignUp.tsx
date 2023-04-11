import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SimpleDialog from "../Modals/SimpleDialog";
import TextFieldWithLabel from "../TextFields/TextFieldWithLabel";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined";
import PrimaryButton from "../Buttons/PrimaryButton";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { useTheme } from "@mui/material/styles";
import { IUserRegistrationRequest, RoleType } from "@/types/user";
import Link from "next/link";

interface IProps {
  openSignupForm: boolean;
  handleClose: () => void;
}

const intialState: IUserRegistrationRequest = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
  roleType: RoleType.Tenant,
  agencyCity: "",
  agencyName: "",
  agencyState: "",
};
const SignUp: FC<IProps> = ({ openSignupForm = false, handleClose }) => {
  const theme = useTheme();
  const [stage, setStage] = useState(1);

  const [signupState, setSignUpState] =
    useState<IUserRegistrationRequest>(intialState);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpState({ ...signupState, [e.target.name]: e.target.value });
  };

  return (
    <SimpleDialog
      maxWidth="md"
      fullWidth={true}
      sx={{ width: { xs: "95%", sm: "60%", md: "50%", lg: "40%" }, mx: "auto" }}
      handleClose={handleClose}
      open={openSignupForm}
      modalTitle="Create your account"
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
        {stage === 1 && (
          <Box display="flex" flexDirection="column" gap={1}>
            <TextFieldWithLabel
              fullWidth
              type="text"
              name="firstName"
              label="First Name"
              value={signupState.firstName}
              onChange={handleChange}
            />
            <TextFieldWithLabel
              fullWidth
              type="text"
              name="lastName"
              label="Last Name"
              value={signupState.lastName}
              onChange={handleChange}
            />
            <TextFieldWithLabel
              fullWidth
              type="email"
              name="email"
              label="Email"
              value={signupState.email}
              onChange={handleChange}
            />
            <TextFieldWithLabel
              fullWidth
              type="tel"
              name="phoneNumber"
              label="Phone Number"
              value={signupState.phoneNumber}
              onChange={handleChange}
            />
            <TextFieldWithLabel
              fullWidth
              type={showPassword ? "text" : "password"}
              name="password"
              label="Password"
              value={signupState.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                ),
              }}
            />
            <TextFieldWithLabel
              fullWidth
              type={showConfirmPassword ? "text" : "password"}
              label="Confirm Password"
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() =>
                      setShowConfirmPassword(
                        (showConfirmPassword) => !showConfirmPassword
                      )
                    }
                  >
                    {showConfirmPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                ),
              }}
            />
          </Box>
        )}
        {stage === 2 && (
          <Box display="flex" flexDirection="column" gap={1}>
            {/* <Typography fontWeight={500}>Account Type</Typography> */}
            <FormControl>
              <FormLabel
                sx={{ fontWeight: 500, color: "#212121" }}
                id="demo-radio-buttons-group-label"
              >
                Account Type
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="roleType"
                value={signupState.roleType}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={0}
                  control={<Radio />}
                  label="Individual (Tenant)"
                />
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="Agency"
                />
                <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label="Property Owner"
                />
              </RadioGroup>
            </FormControl>
            {signupState.roleType == RoleType.Agency && (
              <>
                <TextFieldWithLabel
                  fullWidth
                  type="text"
                  name="agencyName"
                  label="Agency Name"
                  value={signupState.agencyName}
                  onChange={handleChange}
                />
                <TextFieldWithLabel
                  fullWidth
                  type="text"
                  name="agencyCity"
                  label="Agency City"
                  value={signupState.agencyCity}
                  onChange={handleChange}
                />
                <TextFieldWithLabel
                  fullWidth
                  type="text"
                  name="agencyState"
                  label="Agency State"
                  value={signupState.agencyState}
                  onChange={handleChange}
                />
              </>
            )}
          </Box>
        )}
        <Box
          gap={1}
          display="flex"
          py={1}
          alignItems="center"
          justifyContent="flex-end"
          sx={{ float: "right" }}
        >
          <Button
            fullWidth
            type="button"
            onClick={() => setStage((stage) => stage - 1)}
            disableElevation
            variant="contained"
            sx={{
              color: "#212121",
              backgroundColor: "rgba(64,87,109,.07)",
              display: stage == 1 ? "none" : "block",
              px: "0.5rem",
              ":hover": {
                backgroundColor: theme.palette.secondary.main,
              },
            }}
          >
            Back
          </Button>
          <PrimaryButton
            fullWidth
            type={stage == 2 ? "submit" : "button"}
            onClick={() => setStage((stage) => stage + 1)}
            disableElevation
            variant="contained"
          >
            {stage == 2 ? "Register" : "Next"}
          </PrimaryButton>
        </Box>
        <Typography>
          Already have an account? <Link href="/login">Login</Link>
        </Typography>
      </Box>
    </SimpleDialog>
  );
};

export default SignUp;
