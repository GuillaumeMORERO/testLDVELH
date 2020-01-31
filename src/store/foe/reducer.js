import { CHARGE_FOE, BLINDAGE_LOSS } from './actions';

const initialState = {
  id: 0,
  name: '?',
  skill: '',
  blindage: '',
  gain: 0,
  avatar: 'src/data/interog.png',
  descr: ''
};

// function entierAleatoire(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// const nbrAleatoire = entierAleatoire(1, 6);
// console.log('log du reducer :', nbrAleatoire);

// const encounter = foes[entierAleatoire(0, foes.length - 1)];

export default (state = initialState, action) => {
  // console.log('reducer[votes] >>', action);
  // console.log('state :', state);
  // console.log('nom d\'un state :', state.nom);
  // console.log('action.type :', action.type );
  // console.log('action.value :', action.value );

  switch (action.type) {
    case CHARGE_FOE: {
      return {
        ...state,
        id: action.value.id,
        name: action.value.name,
        skill: action.value.skill,
        blindage: action.value.blindage,
        avatar: action.value.avatar,
        descr: action.value.descr,
        gain: action.value.gain
      };
    }
    case BLINDAGE_LOSS: {
      return {
        ...state,
        blindage: state.blindage - action.value,
      };
    }
    default: {
      return state;
    }
  }
}