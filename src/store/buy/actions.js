export const DISPLAY_MODAL_BUY = 'action/DISPLAY_MODAL_BUY';
export const HIDE_MODAL_BUY = 'action/HIDE_MODAL_BUY';


export const displayBuyModal = () => {
  return { type: DISPLAY_MODAL_BUY }
};

export const hideBuyModal = () => {
  return { type: HIDE_MODAL_BUY }
};