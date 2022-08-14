import { html } from '../../node_modules/lit-html/lit-html.js';

import * as jobService from '../services/jobService.js';

const jobTemplate = (job) => html`
          <div class="offer">
            <img src=${job.imageUrl} alt="example" />
            <p>
              <strong>Title: </strong><span class="title">${job.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${job.salary}</span></p>
            <a class="details-btn" href="/details/${job._id}">Details</a>
          </div>
`;

const catalogTemplate = (jobs) => html`
        <section id="dashboard">
          <h2>Job Offers</h2>

          ${jobs.length > 0
                ? html`${jobs.map(j => jobTemplate(j))}`
                : html`<h2>No offers yet.</h2>`
            }

        </section>
`;

export const catalogView = (ctx) => {
    jobService.getAll()
        .then(jobs => {
            ctx.render(catalogTemplate(jobs))
        })
}

