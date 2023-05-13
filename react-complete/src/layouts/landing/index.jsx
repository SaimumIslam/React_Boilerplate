import React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import { Root, ContentWraper } from "./elements";

function LandingLayout({ children }) {
  return (
    <Root>
      <ContentWraper>
        <CssBaseline />
        {children}
      </ContentWraper>
    </Root>
  );
}

export default LandingLayout;
