import reducer, { setLogin, setUser, setLogOut } from "../slice";

describe("User reducer", () => {
  const user = { role: "SA" };

  const initialState = {
    is_login: false,
    user: { role: "ST" },
  };

  it("should handle initial user state", () => {
    expect(reducer(initialState, () => {})).toEqual(initialState);
  });

  it("should handle setLogin", () => {
    const current = reducer(initialState, setLogin(user));
    expect(current.is_login).toEqual(true);
    expect(current.user).toEqual(user);
  });

  it("should handle setUser", () => {
    const current = reducer(initialState, setUser(user));
    expect(current.user).toEqual(user);
  });

  it("should handle setLogOut", () => {
    const current = reducer(initialState, setLogOut());
    expect(current.is_login).toEqual(false);
    expect(current.user).toEqual({});
  });
});
