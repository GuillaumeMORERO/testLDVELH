import React from 'react';

import { useInput } from 'src/hooks';

const TestingHooks = () => {
  const emailInputTools = useInput('', 'Votre email');
  const passwordInputTools = useInput('', 'Votre mot de passe');

  return <form>
    <input type='email' {...emailInputTools} />
    <input type='password' {...passwordInputTools} />
  </form>;
};

export default TestingHooks;
