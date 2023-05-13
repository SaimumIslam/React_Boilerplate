import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER_DOMAIN,
});

const requestCustom = async ({ ...options }) => {
  client.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // const { data, status } = error?.response || {};
      // console.log("error", data, status);
      return error;
    }
  );
  const { data } = await client(options);
  // const { data, status } = await client(options);
  // console.log("success", data, status);
  return data;
};

export default requestCustom;
