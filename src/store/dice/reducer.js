import { DICE_LAUNCH, SCORE_RESET } from './actions';

const initialState = {
  scorePlayer: 0,
  scoreFoe: 0
};

export default (state = initialState, action) => {
  // console.log('sate du reducer dice :', state)
  // console.log('sate du reducer du score :', state.score)
  // console.log('action de lancer de dés :', action.character)
  // console.log('action de lancer de dés :', action.result)
  // console.log('action type :', action.type)
  switch (action.type) {
    case DICE_LAUNCH: {
      if (action.character === 'player') {
        return {
          ...state,
          scorePlayer: state.scorePlayer + action.result,
        };
      }
      if (action.character === 'foe') {
        return {
          ...state,
          scoreFoe: state.scoreFoe + action.result,
        };
      }
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