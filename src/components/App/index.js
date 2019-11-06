/**
 * Imports de dépendances
 */
import React from 'react';

/**
 * Imports locaux
 */
// Composants React
import ClickCounter from 'src/components/ClickCounter';
// Données
import store from 'src/store';
// Styles et assets
import './app.sass';

/**
 * Code
 */
class App extends React.Component {
  state = {
    click: {
      count: 0
    }
  }

  onCounterClick = () => {
    this.setState((state) => {
      const click = {
        count: state.click.count + 1
      };
      return { click };
    });
  }

  render() {
    const promo = this.props.promo;
    return <div id="app">
      <h1 id="app-title">Modèle React</h1>
      <p id="app-content"><em>Salut</em> {promo} !</p>
      <ClickCounter
        count={this.state.click.count}
        onClick={this.onCounterClick}
      />
    </div>;
  }
}

/**
 * Export
 */
export default App;
