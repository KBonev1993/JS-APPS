import { html } from "../../node_modules/lit-html/lit-html.js";
import { until } from "../../node_modules/lit-html/directives/until.js";
import { repeat } from "../../node_modules/lit-html/directives/repeat.js";

const commentsTemplate = (comments, commentForm) => html`
  <div id="comments">
    ${commentForm}
    <ul class="comment-list">
      ${repeat(comments, (c) => c._id, commentCard)}
    </ul>
  </div>
`;

const commentCard = (comment) => html` <li>${comment.content}</li>`;

export function commentView(ctx) {
  return until(commentsWrapper(ctx), "Loading comments...");
}

async function commentsWrapper(ctx) {
  return commentsTemplate([], true);
}
