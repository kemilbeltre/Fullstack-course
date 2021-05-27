import { React, useState } from "react";

import Filter from "./Components/Filter";
import { Countries, useCountries } from "./Components/Countries";

const App = () => {
  const [filter, setFilter] = useState("");
  const { countries } = useCountries();

  const handleChangeSearchCountries = (event) => {
    setFilter(event.target.value);
  };
  const showCountry = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  return (
    <div>
      <Filter
        handleChangeSearchCountries={handleChangeSearchCountries}
        searchCountries={filter}
      />
      <Countries
        filter={filter}
        countries={countries}
        showCountry={showCountry}
      />
    </div>
  );
};

export default App;
