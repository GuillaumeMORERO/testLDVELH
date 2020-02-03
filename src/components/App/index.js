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
import Cv from 'src/components/Cv'
import ModalCombat from 'src/components/ModalCombat'
import ModalBuy from 'src/components/ModalBuy'
import Sheet from 'src/components/Sheet'
import Footer from 'src/components/Footer'
import datas from 'src/data/dataCv'
import pirates from 'src/data/pirates'
import foes from 'src/data/foes'
// Composants React

// Données
// Styles et assets
import './app.sass';
import './style.scss';

/**
 * Code
 */

const App = () => {

  return <div id="app">
    <Header datas={datas} />
    <Select pirates={pirates} />
    <Cv datas={datas} foes={foes} />
    <ModalCombat foes={foes} />
    <ModalBuy datas={datas} />
    <Sheet foes={foes} />
    <Footer />
  </div>

}

/**
 * Export
 */
export default App;
