import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setLogin, setLogOut, setUser } from "./slice";

const useUserRedux = () => {
  const dispatch = useDispatch();

  const selector = (state) => state.user;
  const { is_login, user } = useSelector(selector) || {};

  const handleUser = useCallback(
    (user) => {
      dispatch(setUser(user));
    },
    [dispatch],
  );

  const handleLogIn = useCallback(
    (user) => {
      dispatch(setLogin(user));
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
