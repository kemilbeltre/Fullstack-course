import React, { useState, useEffect } from "react";
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

export const Persons = (props) => {
  const { persons, searchContacts } = props;
  return (
    <div>
      {persons
        .filter((person) => {
          if (searchContacts === " ") {
            return person;
          } else if (searchContacts) {
            const results = person.name
              .toLowerCase()
              .includes(searchContacts.toLowerCase());
            return results;
          } else {
            return person;
          }
        })
        .map((person) => {
          return (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          );
        })}
    </div>
  );
};
