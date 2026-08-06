import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api/entries",
  baseURL: "https://learn-together-5wns.onrender.com/api/entries",
});

export const getEntries = () => API.get("/");
export const createEntry = (data) => API.post("/", data);
export const updateEntry = (id, data) => API.put(`/${id}`, data);
export const deleteEntry = (id) => API.delete(`/${id}`);