import axios from "axios";

const baseUrl = "/api/persons";

const getAll = async () => {
  return await axios.get(baseUrl);
};

const post = (personObject) => {
  return axios.post(baseUrl, personObject);
};

const update = async (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
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
  remove,
};
