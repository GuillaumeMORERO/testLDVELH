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
import Select from 'src/components/Select'
import BurgerGauche from 'src/components/BurgerGauche'
import Cv from 'src/components/Cv'
import Sheet from 'src/components/Sheet'
import Footer from 'src/components/Footer'
import datas from 'src/data/dataCv'
// Composants React

// Données
// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = () => {
  return <div id="app">
    <BurgerGauche />
    <Header />
    <Select />
    <Cv datas={datas} />
    <Sheet />
    <Footer />
  </div>
}

/**
 * Export
 */
export default App;
