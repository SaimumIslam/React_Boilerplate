import { create } from "zustand";

import TokenStore from "helpers/token-store";
import UserStore from "helpers/user-store";

const userStore = new UserStore();
const tokenStore = new TokenStore();

const saved_user = userStore.get();

const initialState = {
  isLogin: Boolean(saved_user) ? true : false,
  user: saved_user || {},
};

const useUserStore = create((set, get) => ({
  ...initialState,
  setUser: (_user) => {
    set({ user: _user });
  },
  setLogin: (_token) => {
    tokenStore.set(_token);
    set({ is_login: true });
  },
  setLogOut: () => {
    tokenStore.clear();
    userStore.clear();
    set({ is_login: false, user: {} });
  },
}));

export default useUserStore;
