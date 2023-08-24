import { createSlice } from "@reduxjs/toolkit";

const saved_user = localStorage.getItem(import.meta.env.VITE_LOCAL_DB_USER_KEY);

const initialState = {
  is_login: Boolean(saved_user) ? true : false,
  user: JSON.parse(saved_user) || {},
};

export const slice = createSlice({
  name: "redux_user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;

      const json_user = JSON.stringify(action.payload);
      localStorage.setItem(import.meta.env.VITE_LOCAL_DB_USER_KEY, json_user);
    },
    setLogin: (state, action) => {
      state.is_login = true;
      state.user = action.payload;

      const json_user = JSON.stringify(action.payload);
      localStorage.setItem(import.meta.env.VITE_LOCAL_DB_USER_KEY, json_user);
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
