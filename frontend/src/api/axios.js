// src/api/axios.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://harsh-studio-6fdb.onrender.com",  // your backend base URL
  withCredentials: true,              // ✅ sends cookies for JWT auth
});

export default axiosInstance;
