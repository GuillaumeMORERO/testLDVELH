import React, { useState, createRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Modal, Button, Card } from 'react-bootstrap';

import './style.scss';

import { changeStatus } from 'src/store/cv/actions';
import { hideCombatModal } from 'src/store/combat/actions';

import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

import { launchDice } from 'src/store/dice/actions';

export default ({ foes }) => {

  const dispatch = useDispatch();
  const { score } = useSelector(state => state.dice);

  const entierAleatoire = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // const oneDieRoll = entierAleatoire(1, 6);
  // console.log('jet de dé :', oneDieRoll)

  const dieRoll = () => {
    return entierAleatoire(1, 6)
    // console.log('resultat aleatoire :', chiffreAleatoire);
  };

  const resultatDuLancer = (habileté) => {
    let lancé = 0;
    while ( lancé < habileté ) {
      lancé++;
      console.log('t\'apparait combine de fois ?');
      const e = dieRoll();
      console.log('jet de dé :', e)
      dispatch(launchDice(e));
    }
  };

  console.log('score final :', score);

  return <div className="dices">
    lancer de dés !!
    <Button onClick={() => resultatDuLancer(2)}>lance un dé !!</Button>
  </div>

}