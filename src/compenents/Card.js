import React from "react";

const Card = ({ country }) => {
  return (
    <li className="card">
      <img src={country.flags.png} alt="" />
      <div className="infos">
        <h2>Nom du pays</h2>
      </div>
    </li>
  );
};

export default Card;
