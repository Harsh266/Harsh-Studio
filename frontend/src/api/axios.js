// src/api/axios.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",  // your backend base URL
  withCredentials: true,              // ✅ sends cookies for JWT auth
});

export default axiosInstance;
