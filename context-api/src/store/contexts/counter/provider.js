import React, { createContext, useReducer, useMemo } from "react";

// Create a context with by calling createContext()
export const NewContext = createContext();

export const INCREMENT_BY_AMOUNT = "INCREMENT_BY_AMOUNT";
export const DECREMENT = "DECREMENT";
export const SET_STATUS = "SET_STATUS";
export const SET_COUNT = "SET_COUNT";

const initialState = {
  count: 0,
  status: "idle",
  message: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case INCREMENT_BY_AMOUNT: {
      return {
        ...state,
        count: state.count + action.payload,
        status: "idle",
      };
    }
    case SET_COUNT: {
      return {
        ...state,
        count: action.payload,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.payload,
      };
    }
    default:
      throw new Error(`Action is not supported: ${action.type}`);
  }
};

// Create a custom Provider for the context
 const CounterProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState); // useMemo to optimize the context value

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <NewContext.Provider value={value} {...props} />;
};
export default CounterProvider