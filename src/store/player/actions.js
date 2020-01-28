export const CHARGE_PIRATE = 'action/CHARGE_PIRATE';
export const CHANGE_HABILETE = 'action/CHANGE_HABILETE';
export const CHANGE_BLINDAGE = 'action/CHANGE_BLINDAGE';
export const CHANGE_PV = 'action/CHANGE_PV';

export const chargePirate = (value) => {
  return { type: CHARGE_PIRATE, value }
};

export const changeHabilete = () => {
  return { type: CHANGE_HABILETE }
};

export const changeBlindage = (value) => {
  return { type: CHANGE_BLINDAGE, value }
};

export const changePV = (value) => {
  return { type: CHANGE_PV, value }
};