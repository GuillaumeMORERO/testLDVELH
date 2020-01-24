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
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

/**
 * Imports locaux
 */

import Header from 'src/components/Header'
import BurgerGauche from 'src/components/BurgerGauche'
import Cv from 'src/components/Cv'
import Sheet from 'src/components/Sheet'
import datas from 'src/data/dataCv'
// Composants React

// Données
// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = () => {
  return <ParallaxProvider>
    <ParallaxBanner
      className="your-class"
      layers={[
        {
          image: 'src/data/framehigh.png',
          amount: 0.1,
        },
        {
          image: 'src/data/framelow.png',
          amount: 0.2,
        },
      ]}
      style={{
        height: 'auto',
      }}
    >

      <div id="app">
        <BurgerGauche />
        <Header />
        <Cv datas={datas} />
        <Sheet />
      </div>
    </ParallaxBanner>
  </ParallaxProvider>
  
}

/**
 * Export
 */
export default App;
