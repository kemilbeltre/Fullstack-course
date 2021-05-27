const Country = ({ country }) => {
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
        </div>

        <div>
          <img src={country.flag} alt="flag" height="70" width="70" />
        </div>
      </div>
    </div>
  );
};

export default Country;
