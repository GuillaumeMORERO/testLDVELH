export const CHARGE_FOE = 'action/CHARGE_FOE';
export const BLINDAGE_LOSS = 'action/BLINDAGE_LOSS';

export const chargeFoe = (value) => {
  return { type: CHARGE_FOE, value }
};

export const blindageLoss = (value) => {
  return { type: BLINDAGE_LOSS, value }
};

