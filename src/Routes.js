import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import BeerList from "../src/components/BeerList";
import Home from "../src/components/Home";
import Header from "../src/components/Header";
import Contacts from "../src/components/Contacts";
import About from "../src/components/About";

function Routes() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Beerlist" exact component={BeerList} />
          <Route path="/Contacts" exact component={Contacts} />
          <Route path="/About" exact component={About} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default Routes;
