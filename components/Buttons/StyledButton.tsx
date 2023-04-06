import { ButtonProps, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface StyledButtonProps extends ButtonProps {}

const StyledButton = styled(Button)<StyledButtonProps>(({ theme }) => ({
  letterSpacing: "2px",
  fontWeight: "bold",
}));

export default StyledButton;
