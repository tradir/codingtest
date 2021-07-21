import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import BeerList from "./components/BeerList";
import Home from "./components/Home";
import Header from "./components/Header";
import Contacts from "./components/Contacts";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beerlist" exact component={BeerList} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
