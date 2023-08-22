"use client";

import React, { Fragment } from "react";
// import ReactGA from "react-ga4";

import { ThemeProvider } from "@mui/material/styles";

import StateProvider from "state-control/provider";
import SwrProvider from "services/swr-provider";

import defaultTheme from "themes/default";

// ReactGA.initialize(process.env.GOOGLE_ANALYTICS_TRAKING_ID);

const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SwrProvider>
        <StateProvider>
          <Fragment>{children}</Fragment>
        </StateProvider>
      </SwrProvider>
    </ThemeProvider>
  );
};

export default Provider;
