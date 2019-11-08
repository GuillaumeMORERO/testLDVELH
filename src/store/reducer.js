const initialState = {
  title: 'Bonjour',
  results: {},
  question: "Pour ou contre la congolemexicalisation ?",
  oui: 0,
  non: 0
};

export const VOTE_OUI = 'action/VOTE_OUI';
export const VOTE_NON = 'action/VOTE_NON';
export const RESET_VOTES = 'action/RESET_VOTES';

export const vote = (voteType) => ({
  // eval permet d'exécuter du code écrit dans une chaîne de caractère.
  // cf. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/eval
  // C'est un outil puissant mais dangereux ! Ici, c'est acceptable car le
  // reducer va sécuriser le traitement des actions.
  type: eval(`VOTE_${voteType.toUpperCase()}`)
});

export const resetVotes = () => ({
  type: RESET_VOTES
});

export default (state = initialState, action) => {
  console.log('reducer >>', action);

  switch(action.type) {
    case VOTE_OUI: {
      const newState = { ...state, oui: state.oui + 1 };
      return newState;
    }
    case VOTE_NON: {
      return { ...state, non: state.non + 1 };
    }
    case RESET_VOTES: {
      return { ...state, oui: 0, non: 0 };
    }
    default: {
      return state;
    }
  }
}
