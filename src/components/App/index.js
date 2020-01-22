/**
 * Imports de dépendances
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import { Router, Route, Switch } from "react-router";

/**
 * Imports locaux
 */

import Header from 'src/components/Header'
import BurgerGauche from 'src/components/BurgerGauche'
import Cv from 'src/components/Cv'
import datas from 'src/data/dataCv'
// Composants React

// Données
// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = () => {
  return (<Router>
    <div id="app">
      <BurgerGauche />
      <Header />
      <Switch>
        <Route exact path="/cv">
          <Cv datas={datas} />
        </Route>
      </Switch>
    </div>
  </Router>);
}

/**
 * Export
 */
export default App;
