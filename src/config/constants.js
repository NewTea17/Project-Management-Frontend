import axios from "axios"

export const url = "http://localhost:8080"

const api = axios.create({ baseURL: url });
const jwt = localStorage.getItem("jwt");

api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
api.defaults.headers.post["Content-Type"] = "application/json";

export default api;