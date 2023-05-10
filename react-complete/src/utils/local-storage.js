import { resolveException, resolveVoidException } from "./error-exception";

export const TOKEN = "token";
export const USER = "user";

export const getTokenStorage = resolveException(() => {
  const token = localStorage.getItem(TOKEN);
  return token;
});

export const setTokenStorage = resolveVoidException((value) => {
  localStorage.setItem(TOKEN, value);
});

export const removeTokenStorage = resolveVoidException(() => {
  localStorage.removeItem(TOKEN);
});

//user

export const getUserStorage = resolveException(() => {
  const user = localStorage.getItem(USER);
  return user && JSON.parse(user);
});

export const setUserStorage = resolveVoidException((value) => {
  localStorage.setItem(USER, JSON.stringify(value));
});

export const removeUserStorage = resolveVoidException(() => {
  localStorage.removeItem(USER);
});
