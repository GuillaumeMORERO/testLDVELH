import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Modal, Button, Card, Alert } from 'react-bootstrap';

import './style.scss';

import { changeBlindage, changePV } from 'src/store/player/actions';
import { hideCombatModal, showScores, resetScores } from 'src/store/combat/actions';
import { blindageLoss } from 'src/store/foe/actions';
import { changeMessage } from 'src/store/message/actions';
import { hideBuyModal } from 'src/store/buy/actions';

export default () => {
  
  const dispatch = useDispatch();
  const { ptvict } = useSelector(state => state.player);
  const readable = useSelector(state => state.cv);
  const { showed } = useSelector(state => state.buy);

  const handleClose = () => {
    dispatch(hideBuyModal());
  };

  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const d4plus1Roll = () => {
    return entierAleatoire(2, 5)
  };
  const buyOpening = (id, cost) => {
    // console.log('pour acheter', id, cost);
    // const realCost = cost - (cost * 2);
    // dispatch(changePV(realCost));
    dispatch(changeStatus(id));
  };

  return <div className="buy">

    <>
      <Modal show={showed} onHide={handleClose} size="xl" centered id="buyModal">
        <Modal.Header closeButton>
          <Modal.Title>Ici on achete des ouvertures de section...</Modal.Title>
        </Modal.Header>
        <Modal.Body>la vas y avoir les sections et leurs prix</Modal.Body>
        <Modal.Footer>
          Messages d'ereur en tout genre.
        </Modal.Footer>
      </Modal>
    </>

  </div>
}