import React, { createContext, useReducer, useMemo } from "react";

// Create a context with by calling createContext()
export const UserContext = createContext();

export const SET_ISLOGIN = "SET_ISLOGIN";
export const SET_USER = "SET_USER";

const initialState = {
  isLogin: false,
  user: "",
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case SET_ISLOGIN: {
      return {
        ...state,
        isLogin: action.payload,
      };
    }
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
        status: "idle",
      };
    }
    default:
      throw new Error(`Action is not supported: ${action.type}`);
  }
};

// Create a custom Provider for the context
const UserProvider = (props) => {
  const [state, dispatch] = useReducer(counterReducer, initialState); // useMemo to optimize the context value

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <UserContext.Provider value={value} {...props} />;
};
export default UserProvider;
