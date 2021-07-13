//this is only testing not related in projects
import request from "services/request";
import DOMAIN from "services/domain";

export const getUsers = () =>
  request({
    method: "get",
    url: DOMAIN.user,
  });

export const getUser = (ID) =>
  request({
    method: "get",
    url: `${DOMAIN.user}/${ID}`,
  });

export const createUser = (user) =>
  request({
    method: "post",
    url: DOMAIN.user,
    data: user,
  });

export const updateUser = (data) =>
  request({
    method: "get",
    url: `${DOMAIN.user}/${data.id}`,
    data: data,
  });
