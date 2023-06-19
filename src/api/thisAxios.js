import axios from "axios";
import { BACKEND_URL } from "../config/env";
import { getToken } from "../utils/localStorage";

axios.defaults.baseURL = BACKEND_URL;

//แนบ token ไปด้วยทุกครั้งที่ส่ง request
// axios.interceptors.request.use(callback, error)
axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);
export default axios;
