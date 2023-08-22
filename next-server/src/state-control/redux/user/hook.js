import { useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setLogin, setUser, setLogOut } from "./slice";

const useUserRedux = () => {
  const dispatch = useDispatch();

  const selector = (state) => state.redux_user;
  const { is_login, user } = useSelector(selector);

  const handleUser = useCallback(
    (user) => {
      dispatch(setUser(user));
    },
    [dispatch],
  );

  const handleLogIn = useCallback(
    (user, token) => {
      if (user && token) {
        dispatch(setUser(user));
        dispatch(setLogin(token));
      }
    },
    [dispatch],
  );

  const handleLogOut = useCallback(() => {
    dispatch(setLogOut());
  }, [dispatch]);

  return {
    user: user,
    is_login: is_login,
    setUser: handleUser,
    setLogIn: handleLogIn,
    setLogOut: handleLogOut,
  };
};

export default useUserRedux;
