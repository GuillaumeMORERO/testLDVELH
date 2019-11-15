import React, { useState } from 'react';

// Objectif : créer un input contrôlé par React
// Lorsque du texte est entré au clavier dans l'input, React doit
// sauvegarder dans un état interne cette valeur, et l'afficher dans l'input.
const TestingHooks = () => {
  // Nouvelle propriété d'état pour le composant : la valeur de l'input
  const [value, setValue] = useState('votre email…');

  const handleChange = (event) => {
    setValue(event.target.value); // mise-à-jour de la propriété d'état
  };

  return <input type='text' value={value} onChange={handleChange} />;
};

export default TestingHooks;
