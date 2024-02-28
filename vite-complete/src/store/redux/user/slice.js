import { createSlice } from "@reduxjs/toolkit";

import TokenStore from "helpers/token-store";
import UserStore from "helpers/user-store";

const userStore = new UserStore();
const tokenStore = new TokenStore("access");

const saved_user = userStore.getUser();
const saved_token = tokenStore.getToken();

const initialState = {
  is_login: Boolean(saved_user) ? true : false,
  user: JSON.parse(saved_user) || {},
  token: saved_token,
};

export const slice = createSlice({
  name: "redux_user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      userStore.setUser(action.payload);
    },
    setLogin: (state, action) => {
      state.is_login = true;
      state.token = action.payload;
      tokenStore.setToken(action.payload);
    },
    setLogOut: (state, action) => {
      state.user = {};
      state.is_login = false;
      localStorage.clear();
    },
  },
});

export const { setLogin, setUser, setLogOut } = slice.actions;

export default slice.reducer;
