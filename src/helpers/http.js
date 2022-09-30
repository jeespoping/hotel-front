import axios from "axios";
import { getToken } from "../utils/token";

const baseURL = process.env.REACT_APP_API_URL;
const baseURL2 = process.env.REACT_APP_BOOK_URL;

const httpSinToken = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

const httpSinToken2 = axios.create({
  baseURL: "http://localhost:8100/api",
  headers: {
    "Content-type": "application/json",
  },
});

const token = getToken() || "";

const httpConToken = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export { httpSinToken, httpConToken, httpSinToken2 };
