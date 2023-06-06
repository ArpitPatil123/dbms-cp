import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/api/v4",
  setCredentials: true,
  withCredentials: true,
});

export default instance;
