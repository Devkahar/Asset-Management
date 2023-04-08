import axios from "axios";
import { BASE_URL } from "./helper";

export const config = {};
export const getClient = async function (URL) {
  const res = await axios.get(`${BASE_URL}${URL}`);
};

export const postClient = async function (URL, payload) {
  const res = await axios.post(`${BASE_URL}${URL}`, payload, config);
};
