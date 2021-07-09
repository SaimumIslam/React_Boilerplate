import { createSlice } from "@reduxjs/toolkit";
import { getTokenStorage } from "utils/handle-local-storage";

const initialState = {
  login: getTokenStorage() ? true : false,
  user: { role: "SA" },
};

export const userSlice = createSlice({
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

export const { setLogin, setUser } = userSlice.actions;

export default userSlice.reducer;
