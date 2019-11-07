import React from 'react';

import { connect } from 'react-redux';


/**
 * La fonction de sélection a pour rôle unique de lire de l'information
 * depuis le state global.
 */
const select = (state) => {
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

const dispatchers = (dispatch) => {
  // Code business (spécifique à l'application de vote);
  return {
    // vote : fonction-usine qui prépare des gestionnaires de clic pour voter
    // sur telle ou telle réponse.
    vote: (voteType) => {
      // La fonction vote crée et retourne des fonctions-handler qui seront
      // branchées sur onClick de différents boutons de vote.
      return (event) => {
        dispatch({ type: `VOTE_${voteType.toUpperCase()}` });
      };
    },
    reset: (event) => {
      dispatch({ type: 'VOTE_RESET' });
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

const VoteWidgetContainer = connect(select, dispatchers)(VoteWidget);

export default VoteWidgetContainer;
