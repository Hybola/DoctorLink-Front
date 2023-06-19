import { TOKEN_NAME } from "../config/env";
export const setToken = (token) => localStorage.setItem(TOKEN_NAME, token);
export const getToken = () => localStorage.getItem(TOKEN_NAME);
export const removeToken = () => localStorage.removeItem(TOKEN_NAME);
