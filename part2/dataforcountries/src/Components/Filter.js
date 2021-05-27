const Filter = (props) => {
  const { handleChangeSearchCountries, searchCountries } = props;
  return (
    <div>
      <p>find countries</p>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChangeSearchCountries}
        value={searchCountries}
      />
    </div>
  );
};

export default Filter;
