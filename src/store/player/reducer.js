import { CHARGE_PIRATE, CHANGE_HABILETE, CHANGE_PV } from 'src/store/player/actions';
import { CHANGE_BLINDAGE } from './actions';

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
  // console.log('action.value :', action.value );

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
    case CHANGE_HABILETE: {
      return {
        ...state,
        habileté: state.habileté + 1,
      };
    }
    case CHANGE_BLINDAGE: {
      return {
        ...state,
        blindage: state.blindage + action.value,
      };
    }
    case CHANGE_PV: {
      return {
        ...state,
        ptvict: state.ptvict + action.value ,
      };
    }
    default: {
      return state;
    }
  }
}