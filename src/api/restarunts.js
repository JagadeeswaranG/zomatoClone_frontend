import axios from "axios";
import { config } from "../config";

export function createRestarunt(resData) {
  return axios.post(`${config.api}/admin/restarunts/create`, resData, {
    headers: {
      Authorization: localStorage.getItem(`${config.storage_key}`),
    },
  });
}

export function listRestarunt(resData) {
  return axios.get(`${config.api}/admin/restarunts/`, {
    headers: {
      Authorization: localStorage.getItem(`${config.storage_key}`),
    },
  });
}
