import http from "../utils/request";
export const captcha = () => {
  return http({ url: "/captcha", method: "GET" });
};
// http://zh.9yuecloud.com/api/login?username=duck&password=admin888&code=53nyb&token=1a1e6e24-0d29-456c-8e42-1cfc6106f688
export const login = (data) => {
  return http({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: "POST",
    data,
  });
};

export const menuList = () => {
  return http({ url: "/menu/list", method: "GET" });
};

/**
 * 获取用户信息接口
 * @returns {AxiosPromise}
 */
export const getUserInfo = () => {
  return request({
    url: "/user/info",
    method: "GET",
  });
};

/**
 * 获取用户权限接口
 * @returns {AxiosPromise}
 */
export const getPermissionList = () => {
  return request({
    url: "/menu/nav",
    method: "GET",
  });
};
