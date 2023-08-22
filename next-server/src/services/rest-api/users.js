import request from "services/request";
import ENDPOINTS from "services/endpoints";

export const totalUsers = (params = {}) =>
  request({
    method: "get",
    url: ENDPOINTS.USERS,
    params: params,
  });

export const userDetails = (userId, params = {}) =>
  request({
    method: "get",
    url: `${ENDPOINTS.USERS}${userId}/`,
    params: params,
  });

export const createUser = (data) =>
  request({
    method: "post",
    url: ENDPOINTS.USERS,
    data: data,
  });

export const updateUser = (data) =>
  request({
    method: "patch",
    url: `${ENDPOINTS.USERS}${data?.id}/`,
    data: data,
  });
export const deleteUser = (ID) =>
  request({
    method: "delete",
    url: `${ENDPOINTS.USERS}${ID}/`,
  });
