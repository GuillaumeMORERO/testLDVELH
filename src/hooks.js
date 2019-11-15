import { useState } from 'react';

// useInput(initialValue, placeholder) => value, setValue, isValid, placeholder..
export const useInput = (initialValue, placeholder) => {
  const [value, setValue] = useState(initialValue);

  // On retourne une boîte à outils spécialisées dans la gestion d'input.
  return {
    value: value,
    // setValue: setValue,
    onChange: (event) => { setValue(event.target.value); },
    placeholder: placeholder + '…'
  };
};

// ... ici, plus de hooks :D ...
