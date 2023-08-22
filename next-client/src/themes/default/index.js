import { createTheme } from "@mui/material/styles";
// import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

import colors from "./colors";
import overrides from "./overrides";
import typography from "./typography";

const defaultTheme = createTheme({
  overrides: overrides,
  palette: colors,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1360,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 70,
    },
  },
  typography: typography,
});

export default defaultTheme;
