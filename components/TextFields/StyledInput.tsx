import { styled } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export type StyledTextFieldProps = TextFieldProps & {};

const StyledInput = styled(TextField)<StyledTextFieldProps>(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
      borderWidth: "1px",
    },
  },
  backgroundColor: "whitesmoke",
}));

export default StyledInput;
