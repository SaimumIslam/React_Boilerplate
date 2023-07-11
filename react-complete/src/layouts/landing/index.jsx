import React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Topbar from "./topbar";

import { Root, ContentWraper } from "./elements";

function LandingLayout({ children }) {
  return (
    <Root>
      <Topbar />
      <ContentWraper>
        <CssBaseline />
        {children}
      </ContentWraper>
    </Root>
  );
}

export default LandingLayout;
