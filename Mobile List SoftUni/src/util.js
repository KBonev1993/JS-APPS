export function parseQueryString(ctx, next) {
  ctx.query = {};
  if (ctx.querystring) {
    const query = Object.fromEntries(
      ctx.querystring.split("&").map((p) => p.split("="))
    );
    Object.assign(ctx.query, query);
  }
  next();
}

export function createSubmitHandler(callback) {
  return function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const asObject = Object.fromEntries(formData.entries());
    callback(asObject, event.target);
  };
}
