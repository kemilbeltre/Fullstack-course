import { React, useState, useEffect } from 'react';

import { Persons } from './Components/Persons';
import Notification from './Components/Notification';
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import PersonService from './Services/Person.service';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    PersonService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const deleteName = (event) => {
    event.preventDefault();
    const personToBeRemoved = persons.find(
      (person) => person.id === event.target.value
    );
    const id = personToBeRemoved.id;
    const name = personToBeRemoved.name;
    if (window.confirm(`Delete ${name} ?`)) {
      PersonService.remove(id).catch((error) => {
        setMessageType('error');
        setMessage(
          `Information of ${name} has already been removed from server`
        );
        setTimeout(() => {
          setMessage(null);
          setMessageType('error');
        }, 5000);
        setPersons(persons.filter((n) => n.id !== id));
      });
      setPersons(persons.filter((n) => n.id !== id));
    }
  };

  const postPerson = (newObject) => {
    PersonService.post(newObject).then((response) => {
      setPersons(persons.concat(response.data));
      setNewName('');
      setNewNumber('');
      setMessageType('confirmation');
      setMessage(`Added ${newName}`);
      setTimeout(() => {
        setMessage(null);
        setMessageType(null);
      }, 5000);
    });
  };

  const updatePerson = (check, newObject, name) => {
    PersonService.update(check.id, newObject).then((returnedPerson) => {
      if (
        window.confirm(
          `${name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        setPersons(
          persons.map((person) =>
            person.id !== check.id ? person : returnedPerson
          )
        );
      }
      setNewName('');
      setNewNumber('');
    });
    return;
  };

  const handleChangeName = (event) => setNewName(event.target.value);
  const handleChangeNumber = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setFilter(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToAddToState = {
      name: newName,
      number: newNumber
    };
    const personCheck = persons.find((person) => person.name === newName);

    if (
      typeof personCheck !== 'undefined' &&
      personCheck.number !== newNumber
    ) {
      updatePerson(personCheck, dataToAddToState, newName);
    } else {
      postPerson(dataToAddToState);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} messageType={messageType} />

      <Filter onChange={handleFilterChange} value={filter} />

      <h2>add a new</h2>

      <PersonForm
        handleSubmit={handleSubmit}
        handleChangeName={handleChangeName}
        newName={newName}
        handleChangeNumber={handleChangeNumber}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} filter={filter} deleteName={deleteName} />
    </div>
  );
};

export default App;
