import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [ newName, setNewName ] = useState('');

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameToAddToState = {
      name: newName
    };
    setPersons(persons.concat(nameToAddToState));
    setNewName("");
  
    console.log("Nombre agregado");
    console.log(newName);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
         name: <input type="text" onChange={handleChange} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map((person) => {
        return <p key={person.name}>{person.name}</p>
    })}</div>
    </div>
  )
}

export default App