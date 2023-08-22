import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./user";

export const reduxStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

const ReduxProvider = ({ children }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

export default ReduxProvider;
