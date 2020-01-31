import { MESSAGE_RESET, MESSAGE_CHANGE } from './actions';

const initialState = {
  message: ''
};

export default (state = initialState, action) => {
  // console.log('sate du reducer dice :', state)
  // console.log('sate du reducer du score :', state.score)
  // console.log('action de lancer de dés :', action.character)
  // console.log('action de lancer de dés :', action.result)
  // console.log('action type :', action.type)
  switch (action.type) {
    case MESSAGE_RESET: {
      return {
        ...state,
        message: '',
      };
    }
    case MESSAGE_CHANGE: {
      return {
        ...state,
        message: action.value,
      };
    }
    default: {
      return state;
    }
  }
}