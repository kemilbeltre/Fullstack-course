import React from "react";

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
