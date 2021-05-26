import { React, useState } from "react";

import Filter from "./Filter";
import Countries from "./Countries";

const App = () => {
  const [searchCountries, setSearchCountries] = useState("");

  const handleChangeSearchCountries = (event) => {
    setSearchCountries(event.target.value);
  };

  return (
    <div>
      <Filter
        handleChangeSearchCountries={handleChangeSearchCountries}
        searchCountries={searchCountries}
      />
      <Countries searchCountries={searchCountries} />
    </div>
  );
};

export default App;
