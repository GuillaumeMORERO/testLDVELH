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

  return <div id="app">
    <ParallaxProvider>
      <ParallaxBanner
        className="your-class"
        layers={[
          {
            image: 'src/data/space-1.jpg',
            amount: 0.2,
          },
        ]}
        style={{
          height: 'auto',
          width: '100%',
        }}
        
    >
        <BurgerGauche />
        <Header />
        <Cv datas={datas} />
        <Sheet />
      
      </ParallaxBanner>
    </ParallaxProvider>

  </div>
  
}

/**
 * Export
 */
export default App;
