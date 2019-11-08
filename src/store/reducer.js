const initialState = {
  title: 'Bonjour',
  results: {},
  question: "Pour ou contre la congolemexicalisation ?",
  oui: 0,
  non: 0
};

export const vote = (voteType) => ({
  type: `VOTE_${voteType.toUpperCase()}`
});

export const resetVotes = () => ({
  type: 'VOTE_RESET'
});

export default (state = initialState, action) => {
  console.log('reducer >>', action);

  switch(action.type) {
    case 'VOTE_OUI': {
      const newState = { ...state, oui: state.oui + 1 };
      return newState;
    }
    case 'VOTE_NON': {
      return { ...state, non: state.non + 1 };
    }
    case 'VOTE_RESET': {
      return { ...state, oui: 0, non: 0 };
    }
    default: {
      return state;
    }
  }
}
