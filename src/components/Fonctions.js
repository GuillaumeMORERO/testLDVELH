// Contient les fonctions du systéme

import React from 'react';

import foes from 'src/data/foes';
import datas from 'src/data/dataCv';
import pirates from 'src/data/pirates';

import { useSelector, useDispatch } from 'react-redux';

import { changeHabilete, changeBlindage, changePV } from 'src/store/player/actions';
import { chargeFoe, blindageLoss } from 'src/store/foe/actions';
import { resetMessage, changeMessage } from 'src/store/message/actions';
import { hideCombatModal, showScores, resetScores, displayCombatModal } from 'src/store/combat/actions';
import { displayBuyModal, hideBuyModal } from 'src/store/buy/actions';
import { changeStatus } from 'src/store/cv/actions';


export default ({ datas, foes }) => {



const dispatch = useDispatch();
const player = useSelector(state => state.player);
const foe = useSelector(state => state.foe);
const { message, category } = useSelector(state => state.message);
const readable = useSelector(state => state.cv);
const { showed } = useSelector(state => state.buy);


function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const D6 = ( modif ) => {
  return entierAleatoire(1, 6) + modif
};
function DRoll ( min, max, modif ) {
  return entierAleatoire(min, max) + modif
};

// from CV
function CombatTriggerCV () {
  const foeAleatoire = DRoll(1, foes.length, -1);
  console.log('foe aleatoire', foeAleatoire);
  dispatch(chargeFoe(foes[foeAleatoire]));
  dispatch(resetMessage());
  dispatch(displayCombatModal());
};

function buyModalDiplayerCV () {
  dispatch(resetMessage());
  dispatch(displayBuyModal());
};

// from sheet

const modifCarac = (carac, cost) => {
  const result = player.ptvict - cost;
  const jetD6 = D6();
  if (result >= 0) {
    if (carac === 'habileté') {
      dispatch(changeHabilete(jetD6))
      dispatch(changeMessage('Votre Habileté a été augmentée de 1 !'));
    }
    if (carac === 'blindage') {
      dispatch(changeBlindage(jetD6))
      dispatch(changeMessage('Votre Blindage a été augmentée de ' + jetD6));
    }
    const modif = cost - (cost*2);
    dispatch(changePV(modif));

  } else {
    dispatch(changeMessage('essaie pas de tricher gros batar !!'));
  }
  
  handleShow();
};

const CombatTrigger = () => {
  const foeAleatoire = entierAleatoire(0, foes.length - 1);
  dispatch(chargeFoe(foes[foeAleatoire]));
  dispatch(resetMessage());
  dispatch(displayCombatModal());
};

const buyModalDiplayer = () => {
  dispatch(resetMessage());
  dispatch(displayBuyModal());
};

// from ModalCombat

const handleClose = () => {
  dispatch(hideCombatModal());
  dispatch(resetScores());
};
const characLaunch = (habileté) => {
  const d6 = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let lancé = 0;
  while ( lancé < habileté ) {
    lancé++;
    d6.push(dieRoll());
  }
  return d6.reduce(reducer, 0);
};
const playerWin = (result) => {
  if (foe.blindage > result) {
    dispatch(blindageLoss(result));
    dispatch(changeMessage('Vous avez infligé ' + result + ' point(s) de dégâts au blindage de l\'ennemi !', 'good'))
    
  } 
  if (foe.blindage <= result) {
    dispatch(changePV(foe.gain));
    dispatch(changeMessage('Vous avez vaincu votre ennemi ! vous remportez ' + foe.gain + ' Points de Victoire !', 'good'));
    setTimeout(() => {
      dispatch(hideCombatModal())
    }, 3000);
  } 
};
const foeWin = (nbr) => {
  const result = nbr - (nbr*2);
  if (player.blindage > result) {
    dispatch(changeBlindage(nbr));
    dispatch(changeMessage('L\'ennemi a infligé ' + result + ' point(s) de dégâts a votre blindage !', 'bad'));
    
  } 
  if (player.blindage <= result) {
    dispatch(changeBlindage(nbr));
    dispatch(changeMessage('Vous êtes vaincu...', 'bad'));
    setTimeout(() => {
      dispatch(hideCombatModal());
    }, 3000);
  } 
};
const fighting = (habPlayer, habFoe) => {
  const scorePlayer = characLaunch(habPlayer);
  const scoreFoe = characLaunch(habFoe);

  dispatch(showScores(scorePlayer, scoreFoe));

  const result = scorePlayer - scoreFoe;
  if (result > 0) {
    playerWin(result);
  };
  if (result < 0) {
    foeWin(result);
  };
  if (result === 0) {
    dispatch(changeMessage('Personne ne remporte cette passe... continuez à vous battre !'));
  };
}; 

// from modalBuy

const handleCloseBuyModal = () => {
  dispatch(hideBuyModal());
};

const d4plus1Roll = () => {
  return entierAleatoire(2, 5)
};

const buyOpening = (id, cost) => {
  if ( ptvict >= cost ) {
    const realCost = cost - (cost * 2);
    const realID = id - 1;
    dispatch(changePV(realCost));
    dispatch(changeStatus(id));
    dispatch(changeMessage('Bravo, t\'as débloqué la section ' + id + ' . ' + datas[realID].titreCarte, 'good'));
  }
  if ( ptvict < cost ) {
    dispatch(changeMessage('c\'est pas good sale batar', 'bad'));
  }
  
};


}