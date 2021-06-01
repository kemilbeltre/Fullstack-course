import React from "react";
import Person from "./Person";

export const Persons = ({ persons, filter, deletePerson }) => {
  return persons
    .filter((person) => person.name.includes(filter))
    .map((person) => (
      <span key={person.id}>
        <Person name={person.name} number={person.number} />
        {'  '}
        <button type="button" value={person.id} onClick={deletePerson}>delete</button> <br />
      </span>
    ));
};
