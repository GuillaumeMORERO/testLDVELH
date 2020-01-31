import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Modal, Button, Card } from 'react-bootstrap';

import './style.scss';

import { changeBlindage } from 'src/store/player/actions';
import { hideCombatModal } from 'src/store/combat/actions';

import { launchDice, resetScore } from 'src/store/dice/actions';

export default ({ foes }) => {

  const dispatch = useDispatch();
  const player = useSelector(state => state.player);
  const { showed } = useSelector(state => state.combat);
  // const { scorePlayer, scoreFoe } = useSelector(state => state.dice);
  const foe = useSelector(state => state.foe);

  const handleClose = () => {
    dispatch(hideCombatModal());
  };
  
  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const dieRoll = () => {
    return entierAleatoire(1, 6)
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

  const fighting = (habPlayer, habFoe) => {
    const scorePlayer = characLaunch(habPlayer);
    const scoreFoe = characLaunch(habFoe);

    const result = scorePlayer - scoreFoe;
    if (result > 0) {
      console.log('resultat du combat - player wins - :', result);
      
    } 
    else if ( result < 0 ) {
      console.log('resultat du combat - foe wins - :', result);
      
    }
    else {
      console.log('resultat du combat - match naze - :', result);
    }

  }; 

  return <div className="combat">

    <Modal show={showed} onHide={handleClose} size="xl" centered id="combatModal">

      <div className="combackdrop">

        <Modal.Header closeButton className="combat-titre">
          <Modal.Title className="combat-titre-txt">Get ready to fuckin' fight !!</Modal.Title>
        </Modal.Header>

        <Modal.Body className="combat-corps">

          <div className="arene">

            <section className="player">

              <h1 className="player-name">{player.nom}</h1>
              <h2 className="player-descr">{player.descr}</h2>

              <div className="player-carac">

                <img className="player-carac_avatar" id="caracPlayer" src={player.avatar} alt="avatar"/>
                <div className="player-carac_contains">
                  <div>
                    <p>Habileté</p>
                    <div>{player.habileté}</div>
                  </div>
                  <div>
                    <p>Blindage</p>
                    <div>{player.blindage}</div>
                  </div>
                </div>

              </div>
            
            </section>

            <section className="foe">
            <h1 className="foe-name">{foe.name}</h1>
            <h2 className="foe-descr">{foe.descr}</h2>

            <div className="foe-carac">

              <img className="foe-carac_avatar" src={foe.avatar} alt="avatar"/>
              <div className="foe-carac_contains">
                <div>
                  <p>Habileté</p>
                  <div>{foe.skill}</div>
                </div>
                <div>
                  <p>Blindage</p>
                  <div>{foe.blindage}</div>
                </div>
              </div>

            </div>
          </section>

          </div>
          <div className="btncenter">
            <button
              type="button"
              onClick={() => fighting(player.habileté, foe.skill)}
            >
              Fight !!!
            </button>
          </div>

        </Modal.Body>

        <Modal.Footer className="combat-pied">
          ici les résultats du Combat...
        </Modal.Footer>

      </div>

    </Modal>

  </div>
}