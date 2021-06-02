import React from "react";

const Filter = ({ onChange, value }) => {
  return (
    <div>
      <p>filter shown with</p>
      <input
        type="text"
        placeholder="Search..."
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Filter;
