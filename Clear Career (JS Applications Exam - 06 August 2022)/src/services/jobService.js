import * as request from "./requester.js"
const baseUrl = 'http://localhost:3030';
const all = '/data/offers?sortBy=_createdOn%20desc'

export const getAll = () => request.get(baseUrl + all);

export const getOne = (jobId) => request.get(`${baseUrl}/details/${jobId}`);

export const create = (jobData) => request.post(baseUrl, jobData);

export const edit = (jobId, jobData) =>
  request.put(`${baseUrl}/details/${jobId}`, jobData);

export const remove = (jobId) => request.del(`${baseUrl}/details/${jobId}`);

