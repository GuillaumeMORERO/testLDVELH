import { DICE_LAUNCH, SCORE_RESET } from './actions';

const initialState = {
  score: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DICE_LAUNCH: {
      return {
        ...state,
        score: state.score + action.value,
      };
    }
    case SCORE_RESET: {
      return {
        ...state,
        score: 0,
      };
    }
    default: {
      return state;
    }
  }
}