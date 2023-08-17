import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./user";

const reduxStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

const ReduxProvider = ({ children }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

ReduxProvider.propTypes = {
  children: PropTypes.node,
};

export default ReduxProvider;
