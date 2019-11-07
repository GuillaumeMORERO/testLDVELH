import React from 'react';

import store from 'src/store';
import connect from 'src/store/connect';


// Voici un cas particulier :
const select = () => {
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
};

const dispatchers = () => {
  // Code business (spécifique à l'application de vote);
  return {
    // vote : fonction-usine qui prépare des gestionnaires de clic pour voter
    // sur telle ou telle réponse.
    vote: (voteType) => {
      // La fonction vote crée et retourne des fonctions-handler qui seront
      // branchées sur onClick de différents boutons de vote.
      return (event) => {
        store.dispatch(`VOTE_${voteType.toUpperCase()}`);
      };
    },
    reset: (event) => {
      store.dispatch('VOTE_RESET');
    }
  };
};

const VoteWidget = ({
  question,
  oui,
  non,
  total,
  vote,
  reset
}) => {
  return <div className="vote-widget">
    <p>{question} (votes : {total})</p>
    <button onClick={vote('oui')}>oui ({oui})</button>
    <button onClick={vote('non')}>non ({non})</button>
    <button onClick={reset}>RESET</button>
  </div>;
};

const VoteWidgetContainer = connect(VoteWidget, select, dispatchers);

export default VoteWidgetContainer;
