import { CHANGE_STATUS } from './actions';

const initialState = {
  1: true,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false
  
};

export default (state = initialState, action) => {
  // console.log('state des articles :', state)
  // console.log('value de l\'action :', action.value)
  switch (action.type) {
    case CHANGE_STATUS: {
      return {
        ...state,
        
      };
    }
    default: {
      return state;
    }
  }
}