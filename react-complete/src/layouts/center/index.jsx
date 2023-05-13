import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { Root } from "./elements";

const CenterLayout = ({ children }) => {
  return (
    <Root component="main">
      <CssBaseline />
      {children}
    </Root>
  );
};

export default CenterLayout;
