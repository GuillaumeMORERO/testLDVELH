const createStore = (reducer) => {
  // Le state est privé. Le seul moyen d'y accéder est de passer
  // par les fonctions qui utilisent le mécanisme de closure.
  // const state = {};
  let state = reducer();
  let subscribers = [];

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
      // Appeler les callbacks enregistrés auprès du store.
      // => prévenir les gens intéressés par les màj du state global.
      subscribers.forEach(callback => callback());
    },

    // Le store permet à des systèmes-tiers de s'abonner au flux des modifications
    // du state privé.
    subscribe: (callback) => {
      subscribers.push(callback);
    }
  };
};

export default createStore;
