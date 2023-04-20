import router from "@/router";
import store from "@/store";
import axios from "axios";
import { ROUTE } from "../constants";

const ErrorAction = (code) => {
  if (code === 403) {
    store.dispatch("logout");
    router.push(ROUTE.LOGIN.path);
  }
};
export const getClient = async function (URL) {
  try {
    console.log("Config --> ", store.getters.config);
    const res = await axios.get(
      `/api/${URL}`,
      store.getters.config ? store.getters.config : {}
    );
    return res;
  } catch (error) {
    if (error?.response?.status) {
      ErrorAction(error.response.status);
    }
    throw new Error(error);
  }
};

export const postClient = async function (URL, payload = {}) {
  try {
    const res = await axios.post(
      `/api/${URL}`,
      payload,
      store.getters.config ? store.getters.config : {}
    );
    console.log(res);
    return res;
  } catch (error) {
    if (error?.response?.status) {
      ErrorAction(error.response.status);
    }
    throw new Error(error);
  }
};

export const patchClient = async function (URL, payload = {}) {
  try {
    const res = await axios.patch(
      `/api/${URL}`,
      payload,
      store.getters.config ? store.getters.config : {}
    );
    console.log(res);
    return res;
  } catch (error) {
    if (error?.response?.status) {
      ErrorAction(error.response.status);
    }
    throw new Error(error);
  }
};

export const putClient = async function (URL, payload = {}) {
  try {
    const res = await axios.put(
      `/api/${URL}`,
      payload,
      store.getters.config ? store.getters.config : {}
    );
    console.log(res);
    return res;
  } catch (error) {
    if (error?.response?.status) {
      ErrorAction(error.response.status);
    }
    throw new Error(error);
  }
};

export const deleteClient = async function (URL) {
  try {
    const res = await axios.delete(
      `/api/${URL}`,
      store.getters.config ? store.getters.config : {}
    );
    console.log(res);
    return res;
  } catch (error) {
    if (error?.response?.status) {
      ErrorAction(error.response.status);
    }
    throw new Error(error);
  }
};
