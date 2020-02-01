import { CHANGE_STATUS } from './actions';

const initialState = {
  readable1: true,
  readable2: false,
  readable3: false,
  readable4: false,
  readable5: false,
  readable6: false
  
};

export default (state = initialState, action) => {
  // console.log('state des articles :', state)
  console.log('value de l\'action :', action.value)
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