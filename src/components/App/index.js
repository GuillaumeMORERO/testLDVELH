/**
 * Imports de dépendances
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Parallax, Background } from 'react-parallax';
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
// import './app.sass';
import './app.scss'

const SpaceBackground = 'src/data/Space-background.jpg';
const AboveEarth = 'src/data/aboveEarth.png';
const space = 'src/data/space.jpg'
/**
 * Code
 */
const App = () => {

  return  <div id="app">

    <Parallax strength={1000}>
      <Background
        className="custom-bg fond"
      >
        <img src={space} alt="space"/>
      </Background>
      <div className="contiendeur" style={{ height: 'auto' }}>
        <BurgerGauche />
        <Header />
        <Cv datas={datas} />
      </div>
    </Parallax>

  </div>

 
  
      {/* <BurgerGauche /> */}
      {/* <Header />
      <Switch>
        <Route exact path="/cv">
          <Cv datas={datas} />
        </Route>
      </Switch> */}

      
}

/**
 * Export
 */
export default App;
