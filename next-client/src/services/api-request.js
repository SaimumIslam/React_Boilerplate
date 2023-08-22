const apiRequest = async ({ method, url, params, data }) => {
  const query_params = new URLSearchParams(params);
  const base_url = `${process.env.API_SERVER_DOMAIN}${url}?${query_params}`;

  const access_token = process.env.DB_TOKEN_KEY;

  const response = await fetch(base_url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem(access_token)}`,
    },
    body: JSON.stringify(data),
  });

  if (response.ok) return await response.json();
  else {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    // throw error;
    return error;
  }
};

export default apiRequest;
