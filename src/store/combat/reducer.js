import { DISPLAY_MODAL_COMBAT, HIDE_MODAL_COMBAT, SHOW_SCORES } from './actions';

const initialState = {
  showed: false,
  resultPlayer: 0,
  resultFoe: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MODAL_COMBAT: {
      return {
        ...state,
        showed: true,
      };
    }
    case HIDE_MODAL_COMBAT: {
      return {
        ...state,
        showed: false,
      };
    }
    case SHOW_SCORES: {
      return {
        ...state,
        resultPlayer: action.scorePlayer,
        resultFoe: action.scoreFoe,
      };
    }
    default: {
      return state;
    }
  }
}