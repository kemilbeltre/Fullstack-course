import { React, useState, useEffect } from "react";
import axios from "axios";

import { Countries } from "./Components/Countries";
import TextField from "./Components/TextField";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState([]);
  const [filter, setFilter] = useState("");
  const [newAccessKey, setNewAccessKey] = useState("");
  const [capitalCity, setCapitalCity] = useState("Madrid");

  const urlWeather = "http://api.weatherstack.com/current?access_key=";
  const urlCountries = "https://restcountries.eu/rest/v2/all";

  useEffect(() => {
    axios.get(urlCountries).then((response) => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`${urlWeather}${newAccessKey}&query=${capitalCity}`)
      .then((response) => {
        setWeather(response.data);
      });
  }, [newAccessKey, capitalCity]);

  const showCountry = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const handleAccessKeyChange = (event) => setNewAccessKey(event.target.value);
  const handleFilterChange = (event) => {
    if (weather.hasOwnProperty("error")) {
      alert(`${weather.error.type}`);
    } else {
      setFilter(event.target.value);
    }
  };
  const handleCountryChange = (capital) => setCapitalCity(capital);

  return (
    <div>
      <TextField
        text="Enter your weatherstack.com access key first"
        value={newAccessKey}
        onChange={handleAccessKeyChange}
      />{" "}
      <br />
      <TextField
        text="find countries"
        value={filter}
        onChange={handleFilterChange}
      />
      <Countries
        filter={filter}
        countries={countries}
        weather={weather}
        showCountry={showCountry}
        handleCountryChange={handleCountryChange}
      />
    </div>
  );
};

export default App;
