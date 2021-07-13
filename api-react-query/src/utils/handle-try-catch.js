export function tryCatchReturn(fn) {
  return function () {
    try {
      return fn.apply(this, arguments);
    } catch (error) {
      console.log(error);
      return undefined;
    }
  };
}

export function tryCatchVoid(fn) {
  return function () {
    try {
      return fn.apply(this, arguments);
    } catch (error) {
      console.log(error);
    }
  };
}
