//page evaluate
export const setLocalDb = (key, value) => {
  return `window.localStorage.setItem('${key}', '${value}')`;
};
