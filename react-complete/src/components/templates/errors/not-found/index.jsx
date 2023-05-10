import React from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

const NotFoundError = () => {
  return (
    <div className={classes.root}>
      <h4 color="error" variant="h1" gutterBottom>
        Not found
      </h4>
      <h1 as={Link} to="/">
        Go To Home
      </h1>
    </div>
  );
};

export default NotFoundError;
