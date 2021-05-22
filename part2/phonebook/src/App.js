import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
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
      <div>
        filter shown with
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChangeSearchContacts}
          value={searchContacts}
        />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input type="text" onChange={handleChangeName} value={newName} />
        </div>
        <div>
          number:{" "}
          <input type="text" onChange={handleChangeNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.filter((person) => {
          if (searchContacts === "") {
            return person
          }else if (person.name.toLowerCase().includes(searchContacts.toLowerCase())) {
              return person
          }
        }).map((person) => {
          return (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default App;
