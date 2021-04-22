import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchCount } from "api";

const initialState = {
  count: 0,
  status: "idle",
  message: null,
};

// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.count += action.payload;
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        state.status = "error";
        state.message = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

export const selectCount = (state) => state.counter.count;

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export const useCounterRedux = () => {
  const dispatch = useDispatch();
  const countValue = useSelector(selectCount);

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
    count: countValue,

    decrement: decrementFuntion,
    increment: incrementFunction,
    incrementByAmount: incrementByAmountFunction,

    incrementAsync: incrementAsyncFunction,
  };
};
