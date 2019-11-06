import React from 'react';

import store from 'src/store';

const VoteWidget = () => {
  // const question = store.getState().question;
  const state = store.getState();
  const { question } = state;

  return <div className="vote-widget">
    <p>{question}</p>
    <button>oui</button>
    <button>non</button>
  </div>
};

export default VoteWidget;
