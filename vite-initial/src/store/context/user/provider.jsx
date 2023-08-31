import { createContext, useMemo, useReducer } from "react";

export const Context = createContext();

export const SET_USER = "SET_USER";
export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";

const UserProvider = (props) => {
  const saved_user = localStorage.getItem(import.meta.env.VITE_LOCAL_DB_USER_KEY);

  const initial_state = {
    is_login: Boolean(saved_user) ? true : false,
    user: JSON.parse(saved_user) || {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case SET_LOGIN: {
        const json_user = JSON.stringify(action.payload);
        localStorage.setItem(import.meta.env.VITE_LOCAL_DB_USER_KEY, json_user);
        return {
          ...state,
          is_login: true,
          user: action.payload,
        };
      }
      case SET_USER: {
        const json_user = JSON.stringify(action.payload);
        localStorage.setItem(import.meta.env.VITE_LOCAL_DB_TOKEN_KEY, json_user);
        return {
          ...state,
          user: action.payload,
        };
      }
      case SET_LOGOUT: {
        return {
          ...state,
          user: null,
          is_login: false,
        };
      }
      default:
        throw new Error(`Action is not supported: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(reducer, initial_state);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <Context.Provider value={value} {...props} />;
};

export default UserProvider;
