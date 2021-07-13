import { useCallback, useContext } from "react";

import { fetchCount } from "services/api";
import { catchDispatch } from "utils";
import {
  CounterContext,
  INCREMENT_BY_AMOUNT,
  DECREMENT,
  SET_STATUS,
  SET_COUNT,
} from "./provider";

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounterContext must be used inside a CounterProvider");
  }
  const { state, dispatch } = context;
  const { count } = state;

  const decrement = useCallback(() => {
    dispatch({ type: DECREMENT });
  }, [dispatch]);

  const increment = useCallback(() => {
    dispatch({ type: INCREMENT_BY_AMOUNT, payload: 1 });
  }, [dispatch]);

  const incrementByAmount = useCallback(
    (amount) => {
      dispatch({ type: INCREMENT_BY_AMOUNT, payload: amount });
    },
    [dispatch]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const incrementAsync = useCallback(
    catchDispatch(async (amount) => {
      const { data } = await fetchCount(amount);
      dispatch({ type: INCREMENT_BY_AMOUNT, payload: data });
      dispatch({ type: SET_STATUS, payload: "idle" });
    }, dispatch),
    [dispatch]
  );

  const resetCount = useCallback(() => {
    dispatch({ type: SET_COUNT, payload: 0 });
  }, [dispatch]);

  return {
    count,
    increment,
    decrement,
    incrementByAmount,
    incrementAsync,
    resetCount,
  };
};
