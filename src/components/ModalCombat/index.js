import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Modal, Button, Card } from 'react-bootstrap';

import './style.scss';

import { changeStatus } from 'src/store/cv/actions';
import { hideCombatModal } from 'src/store/combat/actions';


export default ({ foes }) => {
  
  const dispatch = useDispatch();
  const player = useSelector(state => state.player);
  const { showed } = useSelector(state => state.combat);

  const handleClose = () => {
    dispatch(hideCombatModal());
  };

  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const encounter = foes[entierAleatoire(0, foes.length - 1)];

  return <div className="combat">

    <Modal show={showed} onHide={handleClose} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>Get ready to fuckin' fight !!</Modal.Title>
      </Modal.Header>

      <Modal.Body>

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
          <h1 className="foe-name">{encounter.name}</h1>
          <h2 className="foe-descr">{encounter.descr}</h2>

          <div className="foe-carac">

            <img className="foe-carac_avatar" src={encounter.avatar} alt="avatar"/>
            <div className="foe-carac_contains">
              <div>
                <p>Habileté</p>
                <div>{encounter.skill}</div>
              </div>
              <div>
                <p>Blindage</p>
                <div>{encounter.blindage}</div>
              </div>
            </div>

          </div>
        </section>

        </div>
        <div className="btncenter">
          <button>Fight !!!</button>
        </div>

      </Modal.Body>
      <Modal.Footer>

        ici les résultats du Combat...
      </Modal.Footer>
    </Modal>

  </div>
}