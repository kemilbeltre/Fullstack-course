import { React, useState, useEffect } from "react";
import Filter from "./Components/Filter.js";
import PersonForm from "./Components/PersonForm.js";
import { Persons } from "./Components/Persons.js";
import PersonsService from "./Services/Persons.service";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchContacts, setSearchContacts] = useState("");

  useEffect(() => {
    PersonsService
      .getPersons()
      .then(response => {
        setPersons(response.data);
      })
  }, []);

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

    PersonsService
      .postPersons(dataToAddToState)
      .then(response => {
        setPersons(persons.concat(response.data))
        console.log(persons);
      });

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
