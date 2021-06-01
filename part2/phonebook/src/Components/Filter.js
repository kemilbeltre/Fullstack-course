import React from "react";

const Filter = ({ handleFilterChange, filter }) => {
  return (
    <div>
      <p>filter shown with</p>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleFilterChange}
        value={filter}
      />
    </div>
  );
};

export default Filter;
