const formatErrorResponse = (error_response) => {
  if (Array.isArray(error_response)) {
    return error_response[0];
  } else if (typeof error_response === "object") {
    const error_object = {};
    for (let [key, value] of Object.entries(error_response)) {
      error_object[key] = value[0];
    }
    return error_object;
  } else if (error_response?.hasOwnProperty("detail")) {
    return error_response?.detail;
  }
  return error_response;
};

const apiRequest = async ({ method, url, params, data }) => {
  const query_params = new URLSearchParams(params);

  const api_route = Boolean(params) ? `${url}?${query_params}` : url;
  const base_url = `${import.meta.env.VITE_APP_SERVER_DOMAIN}${api_route}`;

  const access_token = import.meta.env.VITE_APP_DB_TOKEN_KEY;

  const api_response = await fetch(base_url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem(access_token)}`,
    },
    body: JSON.stringify(data),
  });

  const response_data = await api_response.json();
  const error_resoponse = formatErrorResponse(response_data);

  if (api_response.ok) {
    if (import.meta.env.VITE_APP_ENV === "DEVELOPMENT") {
      // eslint-disable-next-line no-console
      console.info("success", response_data);
    }
    return response_data;
  } else {
    const error = new Error("An error occurred while interacting with api.");
    error.response = {
      status: api_response.status,
      message: error_resoponse,
    };

    if (import.meta.env.VITE_APP_ENV === "DEVELOPMENT") {
      // eslint-disable-next-line no-console
      console.error("error", error.info);
    }
    return Promise.reject(error);
  }
};

export default apiRequest;
