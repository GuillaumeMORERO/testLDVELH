import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Container, Form, Alert } from 'react-bootstrap';

import './style.scss';

import {
  chargePirate
} from 'src/store/player/actions';

export default () => {

  const dispatch = useDispatch();
  const player = useSelector(state => state.player);

  const pirate1 = 'src/data/pirate1.png';
  const pirate2 = 'src/data/pirate2.png';

  const onSubmit = (e) => {
    console.log('mauvais choix...', e);
    
    if (e === 1) {
      dispatch(chargePirate('Barbarossa  "SpineSpiltter"'));
      console.log('Barbarossa  "SpineSpiltter" ? Mauvais choix...');
    }
    if (e === 2) {
      dispatch(chargePirate('William "Hard" PHILLIPS'));
      console.log('William "Hard" PHILLIPS ? Mauvais choix...');
    }
  }

  return <Container fluid className="selector">

    <div className="select">

      <h1>
        Choisis ton Pirate !!
      </h1>

      <div className="select-pirates">

        <div className="select-pirates-1">
          <a href="#" alt="pirate1" onClick={() => onSubmit(1)}>
            <h2>Barbarossa  "SpineSpiltter"</h2>
            <img src={pirate1} alt=""/>
          </a>
        </div>

        <div className="select-pirates-2">
          <a href="#" alt="pirate2" onClick={() => onSubmit(2)}>
            <h2>William "Hard" PHILLIPS</h2>
            <img src={pirate2} alt=""/>
          </a>
        </div>

      </div>

    </div>

  </Container>
}