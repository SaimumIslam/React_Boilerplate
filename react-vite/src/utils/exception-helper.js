export function resolveException(fn) {
  return function () {
    try {
      return fn.apply(this, arguments);
    } catch (error) {
      console.error(error);
      return;
    }
  };
}

export function resolveVoidException(fn) {
  return function () {
    try {
      return fn.apply(this, arguments);
    } catch (error) {
      console.error(error);
    }
  };
}
