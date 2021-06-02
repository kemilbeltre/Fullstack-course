import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

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

const remove = async (person) => {
  if (window.confirm(`Delete ${person.name}?`)) {
    return axios
      .delete(`${baseUrl}/${person.id}`)
      .then((response) => response.data);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  post,
  update,
  remove,
};
