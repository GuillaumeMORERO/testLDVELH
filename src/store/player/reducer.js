import { CHARGE_PIRATE } from 'src/store/player/actions';

const initialState = {
  choosen: false,
  nom: '?',
  habileté: '',
  blindage: '',
  ptvict: 0,
  avatar: 'src/data/interog.png',
  descr: ''
};

export default (state = initialState, action) => {
  // console.log('reducer[votes] >>', action);
  // console.log('state :', state);
  // console.log('nom d\'un state :', state.nom);
  // console.log('action.type :', action.type );
  console.log('action.value :', action.value );

  switch (action.type) {
    case CHARGE_PIRATE: {
      return {
        ...state,
        choosen: true,
        nom: action.value.name,
        habileté: action.value.skill,
        blindage: action.value.blindage,
        avatar: action.value.avatar,
        descr: action.value.descr
      };
    }
    default: {
      return state;
    }
  }
}