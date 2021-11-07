import axios from "axios";

const http = (() => {
  const httpInstance = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return httpInstance;
})();

export default http;
