import axios from "axios";

import { getTokenStorage } from "utils/local-storage";

const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER_DOMAIN,
});

const request = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Token ${getTokenStorage()}`;

  client.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // const { data, status } = error?.response || {};
      // console.log("error", data, status);
      return Promise.reject(error);
    }
  );
  const { data } = await client(options);
  // const { data, status } = await client(options);
  // console.log("success", data, status);
  return data;
};

export default request;
