import React from 'react';

/**
 * Composant de synchronisation avec l'état global de l'application.
 * 
 * Rôle : préparer des props (des valeurs, des callbacks…) pour un autre
 * composant dit « de présentation ».
 * 
 * Les deux composants fonctionnent en tandem, dans le but de gérer une morceau
 * d'interface, sur la base des données globales qui circulent dans l'app.
 */
export default (PresentationalComponent, select, dispatchers) => {
  return class extends React.Component {
    // 1. Synchronisation initiale du container avec le store.
    constructor(props) {
      super(props);
      // const question = store.getState().question;
      this.state = select();

      // Objectif : préparer à l'avance un callback pour réagir aux éventuelles
      // futures mises-à-jour du state global.
      store.subscribe(() => {
        // 2. Re-synchronisation suite à une màj du state du store.
        this.setState(select());
      });
    }

    // Code framework (pas spécifique de l'application donc générique/réutilisable)
    render() {
      return <PresentationalComponent
        {...this.state}
        {...dispatchers()}
      />;
    }
  }
};
