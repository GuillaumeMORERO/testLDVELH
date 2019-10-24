/**
 * Imports de dépendances
 */
import React from 'react';

/**
 * Imports locaux
 */
// Composants React
// Données
// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = (props) => {
  const promo = props.promo;
  return <div id="app">
    <h1 id="app-title">Modèle React</h1>
    <p id="app-content"><em>Salut</em> {promo} !</p>
  </div>;
};

/**
 * Export
 */
export default App;
