import React, { useState } from "react";
import Filter from "./Filter.js";
import PersonForm from "./PersonForm.js";
import { Persons, usePersons } from "./Persons.js";

const App = () => {
  const { persons, setPersons } = usePersons([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchContacts, setSearchContacts] = useState("");

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const handleChangeSearchContacts = (event) => {
    setSearchContacts(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToAddToState = {
      name: newName,
      number: newNumber,
    };

    const isAdded = persons.map((person) => person.name);

    if (!isAdded.includes(newName)) {
      setPersons(persons.concat(dataToAddToState));
      setNewName("");
      setNewNumber("");

      console.log("Person added");
      console.log(`With the name: ${newName} and number: ${newNumber}`);
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        handleChangeSearchContacts={handleChangeSearchContacts}
        searchContacts={searchContacts}
      />

      <h2>add a new</h2>

      <PersonForm
        handleSubmit={handleSubmit}
        handleChangeName={handleChangeName}
        newName={newName}
        handleChangeNumber={handleChangeNumber}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} searchContacts={searchContacts} />
    </div>
  );
};

export default App;
