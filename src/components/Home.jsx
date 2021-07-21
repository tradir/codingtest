import React from "react";
import { Link } from "react-router-dom";
import {
  BackgroundColor,
  BeerLinkText,
  WelcomeTable,
  ParagraphText,
} from "../components/Styled-components";

function Home() {
  const customStyles = {
    color: "#141E61",
    textDecoration: "none",
  };

  return (
    <BackgroundColor>
      <WelcomeTable>
        <h1 style={customStyles}>Welcome to the Beer Info</h1>
        <ParagraphText>
          <p>Here you can find the beverage which fits your personality.</p>
          <p>
            Also get familiar with the % of alcohol in every drink you choose.
          </p>
          <p>
            Get a chance to know the food which pairs better with drink you
            choose.
          </p>
          <p>Interested? Go and check out by clicking the button below.</p>
        </ParagraphText>
        <Link to="/beerlist" style={customStyles}>
          <BeerLinkText>
            <h3>Beer List</h3>
          </BeerLinkText>
        </Link>
      </WelcomeTable>
    </BackgroundColor>
  );
}

export default Home;
