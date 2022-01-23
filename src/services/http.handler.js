import axios from "axios";
import { Cookie } from ".";
const httpInstance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

const errorHandler = (error) => {
  throw error;
};

const handleTokenInjection = (request) => {
  const token = Cookie.getCookie("token");
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
};

httpInstance.interceptors.request.use(
  (request) => handleTokenInjection(request),
  (error) => errorHandler(error)
);

httpInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

export default httpInstance;
