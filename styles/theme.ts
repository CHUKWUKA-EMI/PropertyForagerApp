import { createTheme } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple.A700,
      dark: "#3700b3",
      contrastText: "#fff",
    },
    secondary: {
      main: "#88EA00",
      contrastText: "#000",
    },
  },
});
