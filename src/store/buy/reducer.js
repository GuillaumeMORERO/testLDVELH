import { DISPLAY_MODAL_BUY, HIDE_MODAL_BUY } from './actions';

const initialState = {
  show: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MODAL_BUY: {
      return {
        ...state,
        show: true,
      };
    }
    case HIDE_MODAL_BUY: {
      return {
        ...state,
        show: false,
      };
    }
    default: {
      return state;
    }
  }
}