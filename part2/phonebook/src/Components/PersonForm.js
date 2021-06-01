import React from "react";

const PersonForm = ({
  handleSubmit,
  handleChangeName,
  newName,
  handleChangeNumber,
  newNumber,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input required type="text" onChange={handleChangeName} value={newName} />
      </div>
      <div>
        number:{" "}
        <input required type="text" onChange={handleChangeNumber} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
