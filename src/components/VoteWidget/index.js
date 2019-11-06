import React from 'react';

import store from 'src/store';

const VoteWidget = () => {
  // const question = store.getState().question;
  const state = store.getState();
  const { question } = state;

  const handleYesClick = (event) => {
    console.log('[VOTE] oui');
    // comment voter, concrètement ?
    // Finalité : il faut modifier la valeur de la clé "oui" dans le state qui est
    // dans le store de l'application.
    store.dispatch('VOTE_YES');
    console.log(store.getState());
  };

  const handleNoClick = (event) => {
    console.log('[VOTE] non');
    // comment voter, concrètement ?
    // Finalité : il faut modifier la valeur de la clé "oui" dans le state qui est
    // dans le store de l'application.
    store.dispatch('VOTE_NO');
    console.log(store.getState());
  };

  return <div className="vote-widget">
    <p>{question}</p>
    <button onClick={handleYesClick}>oui</button>
    <button onClick={handleNoClick}>non</button>
  </div>
};

export default VoteWidget;
