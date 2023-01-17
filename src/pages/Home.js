import React from "react";
import Countries from "../compenents/Countries";
import Logo from "../compenents/Logo";
import Navigation from "../compenents/Navigation";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Countries />
      <h1>Acceuil</h1>
    </div>
  );
};

export default Home;
