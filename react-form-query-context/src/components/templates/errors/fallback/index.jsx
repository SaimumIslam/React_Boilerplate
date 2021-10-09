import React from "react";
import PropTypes from "prop-types";

import classes from "./index.module.css";

const Fallback = ({ message, reset }) => {
  return (
    <div className={classes.root}>
      <h4 color="error" variant="h1" gutterBottom>
        {message}
      </h4>
      <button  onClick={reset}>
        Reset
      </button>
    </div>
  );
};

Fallback.propTypes = {
  reset: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
Fallback.defaultProps = {};

export default Fallback;
