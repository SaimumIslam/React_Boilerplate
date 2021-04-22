import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
} from "../counter";

describe("counter reducer", () => {
  const initialState = {
    count: 3,
    status: "idle",
    message: null,
  };

  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      count: 0,
      status: "idle",
      message: null,
    });
  });

  it("should handle increment", () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.count).toEqual(4);
  });

  it("should handle decrement", () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.count).toEqual(2);
  });

  it("should handle incrementByAmount", () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.count).toEqual(5);
  });
});
