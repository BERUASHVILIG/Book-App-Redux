import axios from "axios";

const ajax = axios.create({
  baseURL:
    "https://www.googleapis.com/books/v1/volumes?q=a+very+short+introduction&maxResults=40",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const ajaxSingle = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default ajax;
