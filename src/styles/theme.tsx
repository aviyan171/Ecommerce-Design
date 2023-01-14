import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1A237E",
      light: "#e8eaf6",
    },
  },
  typography: {
    fontFamily: ["Shalimar", "Roboto", "Sofia Sans Semi Condensed"].join(""),
  },
});
