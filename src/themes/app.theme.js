import { createTheme } from "@material-ui/core/styles";
const fontFamily = "'Roboto', sans-serif";

const colors = {
  background_primary: "#5CDB95",
  background_secondary: "#8EE4AF",
  text_primary: "#379683",
  text_secondary: "#121",
};
const appTheme = createTheme({
  palette: {
    primary: {
      main: colors.background_primary,
    },
    secondary: {
      main: colors.background_secondary,
    },
    background: {
      default: colors.background_primary,
      primary: colors.background_primary,
    },
    text: {
      primary: colors.text_primary,
      secondary: colors.text_secondary,
    },
  },
  typography: {
    font: fontFamily,
    h1: {
      fontSize: 32,
    },
    h2: {
      fontSize: 28,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 22,
    },
    h5: {
      fontSize: 16,
    },
    h6: {
      fontSize: 12,
    },
    title: {
      fontSize: 16,
    },
    subtitle1: {
      fontSize: 12,
    },
    subtitle2: {
      fontSize: 10,
    },
    button: {
      fontSize: 15,
      border: "1px solid",
      color: colors.text_primary,
      borderColor: colors.text_primary,
    },
    overrides: {
      MuiCard: {
        root: {
          background: "#111",
        },
      },
    },
  },
});

export default appTheme;
