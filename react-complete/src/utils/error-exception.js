export function resolveException(fn) {
  return function () {
    try {
      return fn.apply(this, arguments);
    } catch (error) {
      console.log(error);
      return undefined;
    }
  };
}

export function resolveVoidException(fn) {
  return function () {
    try {
      return fn.apply(this, arguments);
    } catch (error) {
      console.log(error);
    }
  };
}
