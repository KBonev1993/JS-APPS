import * as jobService from "../services/jobService.js";

export const deleteView = async (ctx) => {
  try {
    const jobs = await jobService.getOne(ctx.params.jobId);

    let confirmed = confirm(`Do you want to delete job ${job.name}`);

    if (confirmed) {
      await jobService.remove(ctx.params.jobId);
      ctx.page.redirect("/catalog");
    }
  } catch (err) {
    alert(err);
  }
};
