import axios from "axios";

export const Api = axios.create({
  baseURL: "http://peopletest.leadsoft.inf.br",
});
