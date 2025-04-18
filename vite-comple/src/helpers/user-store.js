import { isObject } from "utils/check";

class UserStore {
  constructor() {
    this.key = import.meta.env.VITE_LOCAL_DB_USER_KEY;
  }

  set(user) {
    if (!isObject(user)) {
      throw new Error("User object cannot be empty or null");
    }
    localStorage.setItem(this.key, JSON.stringify(user));
  }
  get() {
    const storedUser = localStorage.getItem(this.key);
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return null;
  }
  clear() {
    localStorage.removeItem(this.key);
  }

  isLoggedIn() {
    return !!this.get();
  }
}

export default UserStore;
