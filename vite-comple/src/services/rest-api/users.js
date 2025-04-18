import apiRequest from "services/api-request";
import ENDPOINTS from "services/rest-endpoints";

export const totalUsers = (params = {}) =>
  apiRequest({ method: "get", url: ENDPOINTS.USERS, params: params });

export const userDetails = (userId, params = {}) =>
  apiRequest({ method: "get", url: `${ENDPOINTS.USERS}${userId}/`, params: params });

export const createUser = (data) =>
  apiRequest({ method: "post", url: ENDPOINTS.USERS, data: data });

export const updateUser = (data) =>
  apiRequest({ method: "patch", url: `${ENDPOINTS.USERS}${data?.id}/`, data: data });

export const deleteUser = (ID) =>
  apiRequest({ method: "delete", url: `${ENDPOINTS.USERS}${ID}/` });
