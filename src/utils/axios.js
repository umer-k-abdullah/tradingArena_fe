import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3304",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
