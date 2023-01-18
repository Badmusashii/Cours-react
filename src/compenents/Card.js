import { object } from "prop-types";
import React from "react";

const Card = ({ country }) => {
  console.log(country);

  return (
    <li className="card">
      <img
        src={country.flags.png}
        alt={"Drapeau " + country.translations.fra.common}
      />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h3> Capital : {country.capital}</h3>
        <p>{country.population.toLocaleString()} habitants</p>
        {/* .toLocaleString sert à integrer un separateur de milliers dans le nombres des habitants */}
      </div>
    </li>
  );
};

export default Card;
