// import { actions } from 'src/store/playeractions';

const initialState = {
  nom: 'Bob the Killer',
  habileté: 1,
  blindage: 10,
  ptvict: 0,
  avatar: 'src/data/pirate1.png'
};

export default (state = initialState, action) => {
  // console.log('reducer[votes] >>', action);
  // console.log('state :', state);
  // console.log('nom d\'un state :', state.nom);

  switch(action.type) {
    default: {
      return state;
    }
  }
}