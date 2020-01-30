export const DICE_LAUNCH = 'action/DICE_LAUNCH';
export const SCORE_RESET = 'action/SCORE_RESET';

export const launchDice = (result, character) => {
  return { type: DICE_LAUNCH, result, character }
};

export const resetScore = () => {
  return { type: SCORE_RESET }
};