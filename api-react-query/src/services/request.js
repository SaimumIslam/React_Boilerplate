import axios from "axios";
import DOMAIN from "services/domain";

import { getTokenStorage } from "utils/handle-local-storage";

const client = axios.create({
  baseURL: DOMAIN.host,
});

const request = async ({ ...options }) => {
  client.defaults.headers.common[
    "Authorization"
  ] = `Token ${getTokenStorage()}`;

  client.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const { data, status } = error?.response || {};
      console.log("error", data, status);
      return Promise.reject(error);
    }
  );

  const { data, status } = await client(options);
  console.log("success", data, status);
  return data;
};

export default request;
