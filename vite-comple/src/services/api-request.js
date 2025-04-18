import TokenStore from "helpers/token-store";
import { hasParam } from "utils/check";

const formatErrorResponse = (error_response) => {
  if (Array.isArray(error_response)) {
    return error_response[0];
  } else if (typeof error_response === "object") {
    const error_object = {};
    for (let [key, value] of Object.entries(error_response)) {
      error_object[key] = value[0];
    }
    return { message: error_object };
  } else if (error_response?.hasOwnProperty("detail")) {
    return { message: error_response?.detail };
  }
  return { message: error_response };
};

const apiRequest = async ({ method, url, params, data, timeout = 20 * 1000 }) => {
  const query_params = new URLSearchParams(params);

  const api_route = hasParam(params) ? `${url}?${query_params}` : url;
  const base_url = `${import.meta.env.VITE_SERVER_DOMAIN}${api_route}`;

  const tokenStore = new TokenStore("access");
  const access_token = tokenStore.getToken();

  const controller = new AbortController();
  const signal = controller.signal;

  const api_response = await fetch(base_url, {
    method: method,
    signal: signal,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${access_token}`,
    },
    body: JSON.stringify(data),
  });

  // const timout_id = setTimeout(() => controller.abort(), timeout);

  const response_text = await api_response.text();
  const response_data =
    response_text === ""
      ? { status_code: api_response.status, message: api_response.statusText }
      : JSON.parse(response_text);

  // const response_data = await api_response.json();

  // clearTimeout(timout_id);

  if (api_response.ok) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.info("success", response_data);
    }
    return response_data;
  } else {
    const error = new Error("An error occurred while interacting with api.");
    const error_resoponse = formatErrorResponse(response_data);
    error.response = {
      status_code: error_resoponse.status_code || api_response.status,
      message: error_resoponse.message || api_response.statusText,
    };

    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.error("error", error.info);
    }
    return Promise.reject(error);
  }
};

export default apiRequest;
