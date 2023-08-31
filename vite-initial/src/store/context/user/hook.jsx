import { useCallback, useContext } from "react";

import { Context, SET_LOGIN, SET_LOGOUT, SET_USER } from "./provider";

const useUserContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("context must be used inside a provider");
  }
  const { state, dispatch } = context;
  const { user, is_login } = state;

  const setLogin = useCallback(
    (user) => {
      dispatch({ type: SET_LOGIN, payload: user });
    },
    [dispatch],
  );

  const setUser = useCallback(
    (user) => {
      dispatch({ type: SET_USER, payload: user });
    },
    [dispatch],
  );

  const setLogout = useCallback(() => {
    dispatch({ type: SET_LOGOUT });
  }, [dispatch]);

  return {
    user,
    setUser,
    is_login,
    setLogin,
    setLogout,
  };
};

export default useUserContext;
