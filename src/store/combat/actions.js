export const DISPLAY_MODAL_COMBAT = 'action/DISPLAY_MODAL_COMBAT';
export const HIDE_MODAL_COMBAT = 'action/HIDE_MODAL_COMBAT';

export const displayCombatModal = () => {
  return { type: DISPLAY_MODAL_COMBAT }
};

export const hideCombatModal = () => {
  return { type: HIDE_MODAL_COMBAT }
};