import http from "../utils/request";

export const getUserInfo = () => {
  return http({
    url: "/user",
    method: "get",
  });
};
