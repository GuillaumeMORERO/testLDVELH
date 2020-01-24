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

const SpaceBackground = 'src/data/Space-background3.jpg';
const AboveEarth = 'src/data/aboveEarth.png';
const space = 'src/data/space.jpg'
/**
 * Code
 */
const App = () => {
  
  return  <div id="app">
    
    <Parallax
      blur={2}
      bgImage={SpaceBackground}
      bgImageAlt="space"
      strength={2000}
    >
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
