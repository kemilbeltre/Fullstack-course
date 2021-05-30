import { useState, useEffect } from "react";
import axios from "axios";

export const usePersons = (init) => {
  const [persons, setPersons] = useState(init);
  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/db").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data.persons);
    });
  };
  useEffect(hook, []);

  return { persons, setPersons };
};
