import React from "react";
import { Link } from "react-router-dom";
import { BackgroundColor, BeerLinkText } from "../components/Styled-components";

function Home() {
  const customStyles = {
    color: "#141E61",
    textDecoration: "none",
  };

  return (
    <BackgroundColor>
      <Link to="/beerlist" style={customStyles}>
        <BeerLinkText>Beer List</BeerLinkText>
      </Link>
    </BackgroundColor>
  );
}

export default Home;
