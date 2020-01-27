/**
 * Imports de dépendances
 */
import React from 'react';
import { push as Menu } from 'react-burger-menu'
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
import pirates from 'src/data/pirates'
// Composants React

// Données
// Styles et assets
import './app.sass';
import './burgerStyle.scss';

/**
 * Code
 */
const App = () => {
  return <div id="app">

    {/* <BurgerGauche /> */}

    <div id="outer-container">
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
      <main id="page-wrap">
        <Header />
        <Select pirates={pirates} />
        <Cv datas={datas} />
        <Sheet />
        <Footer />
      </main>
    </div>

    </div>
}

/**
 * Export
 */
export default App;
