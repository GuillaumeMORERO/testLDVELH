import { CHARGE_PIRATE } from 'src/store/player/actions';

const initialState = {
  nom: '?',
  habileté: '',
  blindage: '',
  ptvict: 0,
  avatar: 'src/data/interog.png'
};

export default (state = initialState, action) => {
  // console.log('reducer[votes] >>', action);
  // console.log('state :', state);
  // console.log('nom d\'un state :', state.nom);
  console.log('action.type :', action.type );
  console.log('action.value :', action.value );

  switch (action.type) {
    case CHARGE_PIRATE: {
      if ( action.value === 'Barbarossa  "SpineSpiltter"' ) {
        return {
          ...state,
          nom: action.value,
          habileté: 2,
          blindage: 5,
          avatar: 'src/data/pirate1.png'
        }
      }
      if (action.value === 'William "Hard" PHILLIPS' ) {
        return {
          ...state,
          nom: action.value,
          habileté: 1,
          blindage: 10,
          avatar: 'src/data/pirate2.png'
        }
      };
    }
    default: {
      return state;
    }
  }
}