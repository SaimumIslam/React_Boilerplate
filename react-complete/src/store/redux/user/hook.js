import { useCallback, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setTokenStorage, removeTokenStorage } from "utils/local-storage";
import {
  getUserStorage,
  setUserStorage,
  removeUserStorage,
} from "utils/local-storage";

import { setLogin, setUser } from "./slice";

const useUserRedux = () => {
  const dispatch = useDispatch();

  const selector = (state) => state.user;
  const { login, user } = useSelector(selector);

  const handleUser = useCallback(
    (user) => {
      setUserStorage(user);
      dispatch(setUser(user));
    },
    [dispatch]
  );

  const handleLogIn = useCallback(
    (user, token) => {
      if (user && token) {
        handleUser(user);
        setTokenStorage(token);
        dispatch(setLogin(true));
      }
    },
    [dispatch, handleUser]
  );

  const handleLogOut = useCallback(() => {
    removeTokenStorage();
    removeUserStorage();
    dispatch(setLogin(false));
    dispatch(setUser({}));
  }, [dispatch]);

  const onApplicationOpen = useCallback(() => {
    const user = getUserStorage();
    if (user) handleLogIn(user);
  }, [handleLogIn]);

  useEffect(onApplicationOpen, [onApplicationOpen]);

  return {
    isLogin: login,
    setLogIn: handleLogIn,
    setLogOut: handleLogOut,
    user: user,
    setUser: handleUser,
  };
};

export default useUserRedux;
