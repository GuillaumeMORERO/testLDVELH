const initialState = {
  question: "Pour ou contre la congolemexicalisation ?",
  oui: 0,
  non: 0
}

export default (state = initialState, action) => {
  console.log('reducer >>', action);

  switch(action) {
    case 'VOTE_YES': {
      // TODO: modifier le state courant (incrémenter le bon compteur)
      // Attention, il faut travailler sur une copie du state !
      const newState = { ...state, oui: state.oui + 1 };
      return newState;
    }
    case 'VOTE_NO': {
      return { ...state, non: state.non + 1 };
    }
    default: {
      return state;
    }
  }
}
