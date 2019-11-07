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

  // vote : fonction-usine qui prépare des gestionnaires de clic pour voter
  // sur telle ou telle réponse.
  vote = (voteType) => {
    // La fonction vote crée et retourne des fonctions-handler qui seront
    // branchées sur onClick de différents boutons de vote.
    return (event) => {
      store.dispatch(`VOTE_${voteType.toUpperCase()}`);
      // 2. Re-synchronisation suite à une màj du state du store.
      this.setState(this.select());
    };
  }

  render() {
    console.log(this.state);
    return <VoteWidget
      question={this.state.question}
      oui={this.state.oui}
      non={this.state.non}
      total={this.state.total}
      vote={this.vote}
    />;
  }
}

const VoteWidget = ({
  question,
  oui,
  non,
  total,
  vote
}) => {
  return <div className="vote-widget">
    <p>{question} (votes : {total})</p>
    <button onClick={vote('oui')}>oui ({oui})</button>
    <button onClick={vote('non')}>non ({non})</button>
    <button onClick={vote('reset')}>RESET</button>
  </div>
};

export default VoteWidgetContainer;
