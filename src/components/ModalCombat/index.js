import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Modal } from 'react-bootstrap';

import './style.scss';

import { changeStatus } from 'src/store/cv/actions';
import { hideCombatModal } from 'src/store/combat/actions';

export default () => {
  
  const dispatch = useDispatch();
  const { player } = useSelector(state => state.player);
  const { showed } = useSelector(state => state.combat);

  const handleClose = () => {
    dispatch(hideCombatModal());
  };

  return <div className="combat">

    <Modal show={showed} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Get ready to fuckin' fight !!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Ici une zone de combat
      </Modal.Body>
      <Modal.Footer>
        
        ici les résultats du Combat...
      </Modal.Footer>
    </Modal>

  </div>
}