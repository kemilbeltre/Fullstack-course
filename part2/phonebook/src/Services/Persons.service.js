import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getPersons = async () => {
  return await axios.get(baseUrl);
};

const postPersons = (personObject) => {
  return axios.post(baseUrl, personObject);
};

const updatePersons = async (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const removePersons = async (person) => {
  if (window.confirm(`Do you want to remove ${person.name}?`)) {
    return axios
      .delete(`${baseUrl}/${person.id}`)
      .then((response) => response.data);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getPersons,
  postPersons,
  updatePersons,
  removePersons,
};
