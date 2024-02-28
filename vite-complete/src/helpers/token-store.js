class TokenStore {
  store_map = {
    access: import.meta.env.VITE_LOCAL_DB_TOKEN_KEY,
    refresh: "refresh_token",
  };

  constructor(key_) {
    this.key = this.store_map[key_];
  }

  setToken(token) {
    if (!token) {
      throw new Error("Token cannot be empty or null");
    }
    localStorage.setItem(this.key, token);
  }
  getToken() {
    return localStorage.getItem(this.key);
  }

  clearToken() {
    localStorage.removeItem(this.key);
  }
}

export default TokenStore;
