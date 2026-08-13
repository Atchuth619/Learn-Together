import axios from "axios";

const API = axios.create({
   baseURL: "https://learn-together-5wns.onrender.com/api/entries", //change it while running it from local
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
});

export const getEntries = (params = {}) => API.get("/", { params });
export const createEntry = (data) => API.post("/", data);
export const updateEntry = (id, data) => API.put(`/${id}`, data);
export const deleteEntry = (id) => API.delete(`/${id}`);