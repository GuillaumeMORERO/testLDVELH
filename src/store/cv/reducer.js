import { CHANGE_STATUS } from './actions';

const initialState = {
  readable: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATUS: {
      return {
        ...state,
        readable: true,
      };
    }
    default: {
      return state;
    }
  }
}