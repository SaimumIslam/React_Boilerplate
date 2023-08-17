import React from "react";
import PropTypes from "prop-types";

import CssBaseline from "@mui/material/CssBaseline";

import { Root } from "./_styles";

const CenterLayout = ({ children }) => {
  return (
    <Root component="main">
      <CssBaseline />
      {children}
    </Root>
  );
};

CenterLayout.propTypes = {
  children: PropTypes.node,
};
export default CenterLayout;
