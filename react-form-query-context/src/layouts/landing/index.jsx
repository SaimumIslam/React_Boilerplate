import React from "react";
import classes from "./index.module.css";

function Landing({ children }) {
  return <div className={classes.root}>{children}</div>;
}

export default Landing;
