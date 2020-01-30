import React from 'react';

import { Modal, Button, Card } from 'react-bootstrap';

import './style.scss';

export default ({ foes }) => {

  const entierAleatoire = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const dieRoll = () => {
    return entierAleatoire(1, 6)
  };

  const d6 = [];

  // console.log('tableau d6 :', d6);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // console.log('somme du tableau d6 :', d6.reduce(reducer, 0));


  const resultatDuLancer = (habileté) => {
    let lancé = 0;
    while ( lancé < habileté ) {
      lancé++;
      console.log('t\'apparait combine de fois ?', lancé);
      d6.push(dieRoll());
      console.log('tableau d6 depuis la fonction :', d6);
      
      
    }
    console.log('somme du tableau d6 :', d6.reduce(reducer, 0));
    return d6.reduce(reducer, 0);
  };



  return <div className="dices">
    lancer de dés !!
    <Button onClick={() => resultatDuLancer(3)}>lance un dé !!</Button>
  </div>

}