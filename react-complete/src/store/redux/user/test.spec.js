import navigationReducer, { setLogin, setUser } from "./slice";
import { getTokenStorage } from "utils/local-storage";

describe("User reducer", () => {
  const initialState = {
    login: getTokenStorage() ? true : false,
    user: { role: "SA" },
  };
  it("should handle initial user state", () => {
    expect(navigationReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle setLogin", () => {
    const actual = navigationReducer(initialState, setLogin(false));
    expect(actual.login).toEqual(false);
  });

  it("should handle setUser", () => {
    const actual = navigationReducer(initialState, setUser({}));
    expect(actual.user).toEqual({});
  });
});
