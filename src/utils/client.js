import axios from "axios";
import { BASE_URL } from "./constants";

export const clientAction = {
  getClient: "getClient",
  postClient: "postClient",
  patchClient: "patchClient",
  deleteClient: "deleteClient",
  putClient: "putClient",
};

let config = {};
export const setConfig = function (_config) {
  config = _config;
};

export const getClient = async function (URL) {
  const res = await axios.get(`${BASE_URL}${URL}`);
  return res;
};

export const postClient = async function (URL, payload = {}) {
  const res = await axios.post(`${BASE_URL}${URL}`, payload, config);
  console.log(res);
  return res;
};

export const patchClient = async function (URL, payload = {}) {
  const res = await axios.patch(`${BASE_URL}${URL}`, payload, config);
  console.log(res);
  return res;
};

export const putClient = async function (URL, payload = {}) {
  const res = await axios.put(`${BASE_URL}${URL}`, payload, config);
  console.log(res);
  return res;
};

export const deleteClient = async function (URL, payload = {}) {
  const res = await axios.delete(`${BASE_URL}${URL}`, payload, config);
  console.log(res);
  return res;
};
