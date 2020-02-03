export const DISPLAY_MODAL_CONTACT = 'action/DISPLAY_MODAL_CONTACT';
export const HIDE_MODAL_CONTACT = 'action/HIDE_MODAL_CONTACT';


export const displayContactModal = () => {
  return { type: DISPLAY_MODAL_CONTACT }
};

export const hideContactModal = () => {
  return { type: HIDE_MODAL_CONTACT }
};