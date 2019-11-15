import React, { useState } from 'react';

// useInput(initialValue, placeholder) => value, setValue, isValid, placeholder..
const useInput = (initialValue, placeholder) => {
  const [value, setValue] = useState(initialValue);

  // On retourne une boîte à outils spécialisées dans la gestion d'input.
  return {
    value: value,
    // setValue: setValue,
    handleChange: (event) => { setValue(event.target.value); },
    placeholder: placeholder + '…'
  };
};

const TestingHooks = () => {
  // const [email, setEmail] = useState('votre email…');
  // const [password, setPassword] = useState('votre mot de passe…');

  // const inputTools = useInput('', 'Votre email');
  // const value = inputTools.value;
  // const setValue = inputTools.setValue;
  // const placeholder = inputTools.placeholder;
  const { value, handleChange, placeholder } = useInput('', 'Votre email');

  return <form>
    <input
      type='email'
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
    {/* <input
      type='password'
      value={password}
      onChange={e => {setPassword(e.target.value)}}
    /> */}
  </form>;
};

export default TestingHooks;
