import { tryCatchReturn, tryCatchVoid } from "./handle-try-catch";

export const TOKEN = "token";
export const USER = "user";

export const getTokenStorage = tryCatchReturn(() => {
  const token = localStorage.getItem(TOKEN);
  return token;
});

export const setTokenStorage = tryCatchVoid((value) => {
  localStorage.setItem(TOKEN, value);
});

export const removeTokenStorage = tryCatchVoid(() => {
  localStorage.removeItem(TOKEN);
});

//user

export const getUserStorage = tryCatchReturn(() => {
  const user = localStorage.getItem(USER);
  return user && JSON.parse(user);
});

export const setUserStorage = tryCatchVoid((value) => {
  localStorage.setItem(USER, JSON.stringify(value));
});

export const removeUserStorage = tryCatchVoid(() => {
  localStorage.removeItem(USER);
});
