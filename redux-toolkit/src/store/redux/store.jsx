import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";

export const reduxStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
