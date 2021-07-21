import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  root
);
