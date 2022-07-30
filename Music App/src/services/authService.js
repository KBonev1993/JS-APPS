import * as request from "./requester.js";
import * as userService from "./userService.js";

const baseUrl = "http://localhost:3030/users";

export const login = (email, password) =>
  request.post(`${baseUrl}/login`, { email, password }).then((user) => {
    userService.saveUser(user);
    return user;
  });

export const register = (email, password) =>
  request.post(`${baseUrl}/register`, { email, password }).then((user) => {
    userService.saveUser(user);
    return user;
  });

export const logout = () =>
  fetch(`${baseUrl}/logout`, {
    headers: { "X-Authorization": userService.getToken() },
  }).then(() => {
    userService.delUser();
  });
