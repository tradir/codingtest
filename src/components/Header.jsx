import React from "react";
import { HeaderWrapper, Span } from "./styled-components";
import { Link } from "react-router-dom";

function Header() {
  const styles = {
    color: "#141E61",
    textDecoration: "none",
  };
  return (
    <HeaderWrapper>
      <Link to="/" style={styles}>
        <h1>Beer Info</h1>
      </Link>
      <Span>
        <Link to="/" style={styles}>
          <p>Home</p>
        </Link>
      </Span>
      <Link to="/contacts" style={styles}>
        <Span>
          <p>Contacts</p>
        </Span>
      </Link>
      <Link to="/about" style={styles}>
        <Span>
          <p>About</p>
        </Span>
      </Link>
    </HeaderWrapper>
  );
}

export default Header;
