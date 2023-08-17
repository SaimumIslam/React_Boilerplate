import { createSlice } from "@reduxjs/toolkit";

const saved_user = localStorage.getItem(import.meta.env.VITE_APP_DB_USER_KEY);

const initialState = {
  is_login: Boolean(saved_user) ? true : false,
  user: JSON.parse(saved_user) || {},
  access_token: "",
};

export const slice = createSlice({
  name: "redux_user",
  initialState: initialState,
  reducers: {
    setLogin: (state, action) => {
      state.is_login = true;
      localStorage.setItem(
        import.meta.env.VITE_APP_DB_TOKEN_KEY,
        action.payload
      );
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem(
        import.meta.env.VITE_APP_DB_TOKEN_KEY,
        JSON.stringify(action.payload)
      );
    },
    setLogOut: (state, action) => {
      state.user = null;
      state.is_login = false;
      localStorage.clear();
    },
  },
});

export const { setLogin, setUser, setLogOut, setAccessToken } = slice.actions;

export default slice.reducer;
