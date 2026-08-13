import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api/entries",  //change it while running it from local
  baseURL: "https://learn-together-5wns.onrender.com/api",
});

export const login = (data) => API.post("/auth/login", data);
export const register = (data) => API.post("/auth/register", data);
export const getMe = () => API.get("/auth/me");
