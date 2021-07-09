export function catchDispatch(fn, dispatch) {
  return function () {
    dispatch({ type: "SET_STATUS", payload: "loading" });
    try {
      return fn.apply(this, arguments);
    } catch (error) {
      dispatch({ type: "SET_STATUS", payload: "error" });
      throw new Error("Opss!");
    }
  };
}
