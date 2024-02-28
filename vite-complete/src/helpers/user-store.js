import { isObject } from "utils/check";

class UserStore {
  constructor() {
    this.key = import.meta.env.VITE_LOCAL_DB_USER_KEY;
  }

  setUser(user) {
    if (!isObject(user)) {
      throw new Error("User object cannot be empty or null");
    }
    localStorage.setItem(this.key, JSON.stringify(user));
  }

  getUser() {
    const storedUser = localStorage.getItem(this.key);
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return null;
  }

  isLoggedIn() {
    return !!this.getUser();
  }

  clearUser() {
    localStorage.removeItem(this.key);
  }
}

export default UserStore;
