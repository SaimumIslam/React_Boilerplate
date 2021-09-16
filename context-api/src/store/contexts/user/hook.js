import { useCallback, useContext } from "react";
import { NewContext, SET_ISLOGIN, SET_USER } from "./provider";


const useUserContext = () => {
  const context = useContext(NewContext);
  if (!context) {
    throw new Error("useUserContext must be used inside a UserProvider");
  }
  const { state, dispatch } = context;
  const { user, isLogin } = state;

  const setLogin = useCallback(
    (flag) => {
      dispatch({ type: SET_ISLOGIN, payload: flag });
    },
    [dispatch]
  );

  const setUser = useCallback(
    (user) => {
      dispatch({ type: SET_USER, payload: user });
    },
    [dispatch]
  );

  return {
    user,
    setUser,
    isLogin,
    setLogin,
  };
};

export default useUserContext;
