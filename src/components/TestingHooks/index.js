import React from 'react';
import emailValidator from 'email-validator';

import { useInput } from 'src/hooks';

const TestingHooks = () => {
  const emailInputTools = useInput('', 'Votre email', {
    validate: emailValidator.validate
  });
  const passwordInputTools = useInput('', 'Votre mot de passe', {
    validate: (password) => {
      return password === 'testtest';
    }
  });

  return <form>
    <input type='email' {...emailInputTools.props} />
    <span>{emailInputTools.isValid ? 'OK' : 'KO'}</span>
    <input type='password' {...passwordInputTools.props} />
    <span>{passwordInputTools.isValid ? 'OK' : 'KO'}</span>
  </form>;
};

export default TestingHooks;
