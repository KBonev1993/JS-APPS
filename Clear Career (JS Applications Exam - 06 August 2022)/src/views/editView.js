import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as jobService from "../services/jobService.js";
import { jobIsInvalid } from "../api/validators.js";

const editTemplate = (job, submitHandler) => html`<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
  <div class="form">
    <h2>Edit Offer</h2>
    <form class="edit-form" @submit=${submitHandler}>
      <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Title"
      />
      <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
      />
      <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
      />
      <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
      ></textarea>
      <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
      ></textarea>
      <input
        type="text"
        name="salary"
        id="job-salary"
        placeholder="Salary"
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>
`;

export const editView = (ctx) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const jobData = Object.fromEntries(new FormData(e.currentTarget));
    if (jobIsInvalid(jobData)) {
      alert("All fields are required");
      return;
    }
    jobService.edit(ctx.params.jobId, jobData).then(job => {ctx.page.redirect(`/details/${ctx.params.jobId}`)}).catch(err => {alert(err)})
  };
  jobService.getOne(ctx.params.jobId).then((job) => {
    ctx.render(editTemplate(job, submitHandler));
  });
};
