import { createTheme } from "@material-ui/core/styles";
const fontFamily = "'Roboto', sans-serif";
const appTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#FFF",
    },
    background: {
      default: "#FFF",
      primary: "#FFF",
    },
    text: {
      primary: "#000",
      secondary: "#001",
    },
    typography: {
      font: fontFamily,
    },
  },
});

export default appTheme;
