class TokenStore {
  store_map = {
    access: import.meta.env.VITE_LOCAL_DB_TOKEN_KEY,
    refresh: "refresh_token",
  };

  constructor(key_ = import.meta.env.VITE_LOCAL_DB_TOKEN_KEY) {
    this.key = this.store_map[key_];
  }

  set(token) {
    if (!token) {
      throw new Error("Token cannot be empty or null");
    }
    localStorage.setItem(this.key, token);
  }
  get() {
    return localStorage.getItem(this.key);
  }

  clear() {
    localStorage.removeItem(this.key);
  }
}

export default TokenStore;
