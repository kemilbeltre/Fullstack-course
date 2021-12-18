import axios from 'axios';

const baseUrl = '/api/persons';

const getAll = async () => {
  return axios.get(baseUrl);
};

const post = (personObject) => {
  return axios.post(baseUrl, personObject);
};


const update = async (id, newObject) => {
  return axios
      .put(`${baseUrl}/${id}`, newObject)
      .then((response) => response.data);
};

const remove = async (id) => {
  return axios
      .delete(`${baseUrl}/${id}`)
      .then((response) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  post,
  update,
  remove
};
