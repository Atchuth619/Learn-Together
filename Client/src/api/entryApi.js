import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/entries",
});

export const getEntries = () => API.get("/");
export const createEntry = (data) => API.post("/", data);
export const deleteEntry = (id) => API.delete(`/${id}`);