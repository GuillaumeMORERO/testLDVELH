import { MESSAGE_RESET, MESSAGE_CHANGE } from './actions';

const initialState = {
  message: '',
  category: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_RESET: {
      return {
        ...state,
        message: '',
        category: ''
      };
    }
    case MESSAGE_CHANGE: {
      return {
        ...state,
        message: action.value,
        category: action.category
      };
    }
    default: {
      return state;
    }
  }
}