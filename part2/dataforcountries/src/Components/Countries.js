import { useState, useEffect } from "react";
import axios from "axios";

import Country from "./Country";

const url = "https://restcountries.eu/rest/v2/all";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCountries(response.data);
    });
  }, []);

  return { countries, setCountries };
};

export const Countries = ({ filter, countries, showCountry }) => {
  const countriesFiltered = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (countriesFiltered.length === countries.length) {
    return <div></div>;
  } else if (countriesFiltered.length === 1) {
    return (
      <div key={countriesFiltered[0].name}>
        <Country country={countriesFiltered[0]} />
      </div>
    );
  } else if (countriesFiltered.length <= 10) {
    return countriesFiltered.map((country) => (
      <div key={country.name}>
        <span>{country.name}</span>
        <button type="button" value={country.name} onClick={showCountry}>
          show
        </button>
        <br />
      </div>
    ));
  } else {
    return <div>Too many matches, specify another filter</div>;
  }
};
