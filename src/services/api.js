import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.dacasalinguicas.com.br", // sua API local
  headers: {
    "Content-Type": "application/json",
  },
});