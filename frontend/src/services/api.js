import axios from "axios";

const API = axios.create({
  baseURL: "https://realtime-chat-app-y7q2.onrender.com/api",
});

export default API;