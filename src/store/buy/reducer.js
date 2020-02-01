import { DISPLAY_MODAL_BUY, HIDE_MODAL_BUY } from './actions';

const initialState = {
  showed: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MODAL_BUY: {
      return {
        ...state,
        showed: true,
      };
    }
    case HIDE_MODAL_BUY: {
      return {
        ...state,
        showed: false,
      };
    }
    default: {
      return state;
    }
  }
}