import { useState, useEffect } from "react";

const url = "https://restcountries.eu/rest/v2/all";

const Countries = (props) => {
  const [countries, setCountries] = useState([]);
  const { searchCountries } = props;

  const hook = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
  };

  useEffect(() => {
    hook();
  }, []);
  return (
    <div>
      {countries
        .filter((country) => {
          if (searchCountries === " ") {
            return country;
          } else if (searchCountries) {
            const results = country.name
              .toLowerCase()
              .includes(searchCountries.toLowerCase());
            return results;
          } else {
            return country;
          }
        })
        .map((country) => {
          const { id, name, capital, population, languages, flag } = country;
          return (
            <div key={id}>
              <h1>{name}</h1>

              <div>
                <p>capital {capital}</p>
                <p>population {population}</p>
              </div>

              <h2>Languages</h2>

              <div>
                {languages.map((language) => {
                  return <li>{language.name}</li>;
                })}
              </div>

              <div>
                <img src={flag} alt="flad" height="80" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Countries;
