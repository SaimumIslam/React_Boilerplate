"use client";

import React from "react";

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

export default LandingLayout;
