import axios from 'axios';

const baseUrl = '/api/persons';

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.then((response) => response.data);
};

const post = async (personObject) => {
  const request = await axios.post(baseUrl, personObject);
  return request.then((response) => response.data);
};

const update = async (id, newObject) => {
  const request = await axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const remove = async (id) => {
  const request = await axios.delete(`${baseUrl}/${id}`)
  return request.then((response) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  post,
  update,
  remove
};
