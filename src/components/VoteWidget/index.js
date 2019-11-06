import React from 'react';

import store from 'src/store';

/**
 * Composant de synchronisation avec l'état global de l'application.
 * 
 * Rôle : préparer des props (des valeurs, des callbacks…) pour un autre
 * composant dit « de présentation ».
 * 
 * Les deux composants fonctionnent en tandem, dans le but de gérer une morceau
 * d'interface, sur la base des données globales qui circulent dans l'app.
 */
class VoteWidgetContainer extends React.Component {
  // 1. Synchronisation initiale du container avec le store.
  constructor(props) {
    super(props);
    // const question = store.getState().question;
    this.state = this.select(); // => déclenchera un refresh du container
  }

  select = () => {
    const state = store.getState();
    const { question, oui, non } = state;
    // Ici, la fonction select pourrait appliquer des traitements sur les données
    // récupérées dans le state global.
    return {
      question,
      oui,
      non,
      total: oui + non
    };
  }

  // 2. Re-synchronisation suite à une màj du state du store.

  handleYesClick = (event) => {
    console.log('[VOTE] oui');
    // comment voter, concrètement ?
    // Finalité : il faut modifier la valeur de la clé "oui" dans le state qui est
    // dans le store de l'application.
    store.dispatch('VOTE_YES'); // mise-à-jour du state de l'application
    console.log(store.getState());
    this.setState(this.select()) // mise-à-jour de l'UI
  };

  handleNoClick = (event) => {
    console.log('[VOTE] non');
    // comment voter, concrètement ?
    // Finalité : il faut modifier la valeur de la clé "oui" dans le state qui est
    // dans le store de l'application.
    store.dispatch('VOTE_NO');
    console.log(store.getState());
  };

  render() {
    console.log(this.state);
    return <VoteWidget
      question={this.state.question}
      oui={this.state.oui}
      non={this.state.non}
      handleYesClick={this.handleYesClick}
    />;
  }
}

const VoteWidget = ({ question, oui, non, total, handleYesClick }) => {
  return <div className="vote-widget">
    <p>{question} (votes : {total})</p>
    <button onClick={handleYesClick}>oui ({oui})</button>
    <button>non ({non})</button>
  </div>
};

export default VoteWidgetContainer;
