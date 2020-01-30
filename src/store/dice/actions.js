export const DICE_LAUNCH = 'action/DICE_LAUNCH';
export const SCORE_RESET = 'action/SCORE_RESET';

export const launchDice = (value) => {
  return { type: DICE_LAUNCH, value }
};

export const resetScore = () => {
  return { type: SCORE_RESET }
};