import React from "react";
import Person from "./Person";

export const Persons = ({ persons, filter, deleteName }) => {
  return persons
    .filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
    .map((person) => (
      <span key={person.id}>
        <Person name={person.name} number={person.number} />
        {'  '}
        <button type="button" value={person.id} onClick={deleteName}>delete</button> <br />
      </span>
    ));
};
