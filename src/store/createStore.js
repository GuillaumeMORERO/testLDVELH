const createStore = (reducer) => {
  // Le state est privé. Le seul moyen d'y accéder est de passer
  // par les fonctions qui utilisent le mécanisme de closure.
  // const state = {};
  let state = reducer();

  // API publique du store. Un ensemble de méthodes qui permettent
  // d'agir sur le state privé, de manière contrôlée / fiable.
  return {
    // Récupération du state courant (une copie ^^).
    getState: () => {
      return { ...state };
    },

    // Modification du state courant (sous contrôle du reducer interne).
    dispatch: (action) => {
      const newState = reducer(state, action);
      state = newState;
    }
  };
};

export default createStore;
