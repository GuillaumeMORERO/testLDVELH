export const DISPLAY_MODAL_COMBAT = 'action/DISPLAY_MODAL_COMBAT';
export const HIDE_MODAL_COMBAT = 'action/HIDE_MODAL_COMBAT';
export const SHOW_SCORES = 'action/SHOW_SCORES';
export const RESET_SCORES = 'action/RESET_SCORES';


export const displayCombatModal = () => {
  return { type: DISPLAY_MODAL_COMBAT }
};

export const hideCombatModal = () => {
  return { type: HIDE_MODAL_COMBAT }
};

export const showScores = (scorePlayer, scoreFoe) => {
  return { type: SHOW_SCORES, scorePlayer, scoreFoe }
};

export const resetScores = () => {
  return { type: RESET_SCORES }
};
