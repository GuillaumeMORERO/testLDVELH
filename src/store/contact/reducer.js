import { DISPLAY_MODAL_CONTACT, HIDE_MODAL_CONTACT } from './actions';

const initialState = {
  contactShow: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MODAL_CONTACT: {
      return {
        ...state,
        contactShow: true,
      };
    }
    case HIDE_MODAL_CONTACT: {
      return {
        ...state,
        contactShow: false,
      };
    }
    default: {
      return state;
    }
  }
}