import React, { useState } from 'react';

// Objectif : créer un input contrôlé par React
// Lorsque du texte est entré au clavier dans l'input, React doit
// sauvegarder dans un état interne cette valeur, et l'afficher dans l'input.
const TestingHooks = () => {
  // Nouvelle propriété d'état pour le composant : la valeur de l'input
  const [email, setEmail] = useState('votre email…');
  const [password, setPassword] = useState('votre mot de passe…');

  // const handleChange = (event) => {
  //   setValue(event.target.value); // mise-à-jour de la propriété d'état
  // };

  // Objectif 2 : gérer deux champs inputs
  return <form>
    <input type='email' value={email} onChange={e => {setEmail(e.target.value)}} />
    <input type='password' value={password} onChange={e => {setPassword(e.target.value)}} />
  </form>;
};

export default TestingHooks;
