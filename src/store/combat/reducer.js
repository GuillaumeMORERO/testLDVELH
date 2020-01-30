import { DISPLAY_MODAL_COMBAT, HIDE_MODAL_COMBAT } from './actions';

const initialState = {
  showed: false
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
    default: {
      return state;
    }
  }
}