import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    console.log("Token:", token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("Authorization Header:", config.headers.Authorization);

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;