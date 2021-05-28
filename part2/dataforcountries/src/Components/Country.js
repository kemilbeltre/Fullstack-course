import React from "react";

const Country = ({ country, weather }) => {
  if (!weather) {
    weather = [];
  }
  return (
    <div>
      <div key={country.name}>
        <h1>{country.name}</h1>
        <div>
          <p>capital {country.capital}</p>
          <p>population {country.population}</p>
        </div>
        <h2>Languages</h2>
        <div>
          {country.languages.map((language) => {
            return <li key={language.name}>{language.name}</li>;
          })}
        </div>{" "}
        <br />
        <div>
          <img src={country.flag} alt="flag" height="70" width="70" />
        </div>{" "}
        <br />
        <div>
          <h2> Wether in {country.capital}</h2>
          <p>
            <b>temperature: </b> {weather["current"].temperature} º
          </p>
          <img src={weather["current"].weather_icons[0]} alt="weather icon" />
          <p>
            <b>wind: </b> {weather["current"].wind_speed} mph direction{" "}
            {weather["current"].wind_dir}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
