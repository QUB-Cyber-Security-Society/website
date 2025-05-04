import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#DC2148",
    },
    secondary: {
      main: "#212020",
    },
    background: {
      default: "rgb(240, 240, 240)",
    },
  },
  typography: {
    fontFamily: "Anonymous Pro, monospace",
    h6: {
      color: "#9CA3AF",
    },
  },
});

export default theme;
