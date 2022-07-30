import * as userService from "../services/userService.js";

export const authMiddleware = (ctx, next) => {
  ctx.user = userService.getUser();
  next();
};
