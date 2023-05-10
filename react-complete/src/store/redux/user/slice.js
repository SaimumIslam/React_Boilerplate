import { createSlice } from "@reduxjs/toolkit";
import { getTokenStorage } from "utils/local-storage";

const initialState = {
  login: getTokenStorage() ? true : false,
  user: { role: "SA" },
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setLogin, setUser } = slice.actions;

export default slice.reducer;
