import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "./slice";

const useCounterRedux = () => {
  const dispatch = useDispatch();

  const counterSelector = (state) => state.counter;
  const { count } = useSelector(counterSelector);

  const decrementFuntion = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const incrementFunction = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const incrementByAmountFunction = useCallback(
    (incrementValue) => {
      dispatch(incrementByAmount(incrementValue));
    },
    [dispatch]
  );

  const incrementAsyncFunction = useCallback(
    (incrementValue) => {
      dispatch(incrementAsync(incrementValue));
    },
    [dispatch]
  );

  return {
    count: count,

    decrement: decrementFuntion,
    increment: incrementFunction,
    incrementByAmount: incrementByAmountFunction,

    incrementAsync: incrementAsyncFunction,
  };
};

export default useCounterRedux;
