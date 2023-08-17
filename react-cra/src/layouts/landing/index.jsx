import React from "react";
import PropTypes from "prop-types";

import CssBaseline from "@mui/material/CssBaseline";

import { ContentWraper } from "./_styles";
import Topbar from "./topbar";

function LandingLayout({ children }) {
  return (
    <>
      <Topbar />
      <ContentWraper>
        <CssBaseline />
        {children}
      </ContentWraper>
    </>
  );
}

LandingLayout.propTypes = {
  children: PropTypes.node,
};

export default LandingLayout;
