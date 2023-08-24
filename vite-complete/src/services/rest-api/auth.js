import apiRequest from "services/api-request";
import ENDPOINTS from "services/rest-endpoints";

export const attemptLogin = (data) =>
  apiRequest({
    method: "post",
    url: `${ENDPOINTS.AUTH}`,
    data: data,
  });
