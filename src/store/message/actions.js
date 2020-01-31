export const MESSAGE_RESET = 'action/MESSAGE_RESET';
export const MESSAGE_CHANGE = 'action/MESSAGE_CHANGE';

export const resetMessage = () => {
  return { type: MESSAGE_RESET }
};

export const changeMessage = (value) => {
  return { type: MESSAGE_CHANGE, value }
};