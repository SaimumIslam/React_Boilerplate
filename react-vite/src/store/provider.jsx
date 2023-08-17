// import React from "react";
import PropTypes from "prop-types";

import ReduxProvider from "./redux/provider";

const StateProvider = ({ children }) => (
  <ReduxProvider>{children}</ReduxProvider>
);

StateProvider.propTypes = {
  children: PropTypes.node,
};
export default StateProvider;
