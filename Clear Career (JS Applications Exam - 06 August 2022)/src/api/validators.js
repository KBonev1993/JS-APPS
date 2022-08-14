export const jobIsInvalid = (jobData) => {
  const requiredFields = ["text", "title", "job-title", "Title"];
  return requiredFields.some((x) => !jobData[x]);
};
