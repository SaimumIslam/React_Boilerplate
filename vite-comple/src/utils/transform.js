export const convertIfNumber = (value) => {
  const flag = /^\d+$/.test(value);
  return flag ? parseInt(value) : value;
};
