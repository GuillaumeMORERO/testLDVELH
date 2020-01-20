/**
 * Imports de dépendances
 */
import React from 'react';

/**
 * Imports locaux
 */

import Header from 'src/components/Header'
import BurgerGauche from 'src/components/BurgerGauche'
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
  </div>;
}

/**
 * Export
 */
export default App;
