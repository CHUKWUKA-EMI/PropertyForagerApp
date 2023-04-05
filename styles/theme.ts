import { createTheme } from "@mui/material/styles";
import { deepPurple, teal } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple.A700,
      dark: deepPurple[900],
      contrastText: "#fff",
    },
    secondary: {
      main: teal[200],
      contrastText: "#000",
    },
  },
});
