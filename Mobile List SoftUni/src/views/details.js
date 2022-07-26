import { until } from "../../node_modules/lit-html/directives/until.js";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { getById } from "../data/cars.js";
import { cache } from "../../node_modules/lit-html/directive/cache.js";
import { commentView } from "./comments.js";

const detailsTemplate = (car, commentSection) => html` <h2>Details Page</h2>
  <p>Make: ${car.make}</p>
  <p>Model: ${car.model}</p>
  ${commentSection}`;

let carCache = null;

export function showDetails(ctx) {
  ctx.render(until(detailsWrapper(ctx), "Loading..."));
}

async function detailsWrapper(ctx) {
  const carId = ctx.params.id;
  if (carCache == null) {
    carCache = await getById(carId);
  }
  const car = carCache;
  return cache(detailsTemplate(car, commentView(ctx)));
}
