import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchCount } from "services/api/counter";

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

export const slice = createSlice({
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

export const { increment, decrement, incrementByAmount } = slice.actions;
export default slice.reducer;
