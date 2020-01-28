import React, { useState } from 'react';

import { Container, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import { changeHabilete, changeBlindage, changePV } from 'src/store/player/actions';



export default () => {

  const dispatch = useDispatch();
  const player = useSelector(state => state.player);
  // console.log('carac du player : ', player);
  console.log('points de victoire actuels', player.ptvict);
  console.log('habileté du player : ', player.habileté);
  console.log('blindage du player : ', player.blindage);

  const [message, setMessage] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const modifCarac = (carac, cost, gain) => {
    let result = player.ptvict - cost;
    if (result >= 0) {
      if (carac === 'habileté') {
        dispatch(changeHabilete(gain))
        setMessage('Votre Habileté a été augmentée de 1D !')
      }
      if (carac === 'blindage') {
        dispatch(changeBlindage(gain))
        setMessage('Votre Blindage a été augmentée de 1D !')
      }
      dispatch(changePV(cost));
      
      handleShow();
    } else {
      setMessage('essaie pas de tricher gros batar !!')
      handleShow();
    }
  }
  
  return <Container
    fluid
    className="sheet"
    id="sheet"
    style={{display: player.choosen ? '' : 'none' }}
  >

    <div className="pic">
      <img className="pic-arrow_left see" src="src/data/bluearrow.png" alt="arrow"/>
      <div className="pic-ture">
        <img className="pic-ture_head" src={player.avatar} alt="Tête de vainqueur"/>
      </div>
      <img className="pic-arrow_right see" src="src/data/bluearrow.png" alt="arrow"/>
    </div>

    <div className="hud">

      <div className="hud-name">
        <h1 className="hud-name_perso"> {player.nom} </h1>
      </div>

      <p className="hud-descr"> {player.descr} </p>

      <div className="separateur-1">

        <div className="hud-carac">
          <div className="separateur-2">
            <img className="pic-arrow_left-siz see" src="src/data/bluearrow.png" alt="arrow"/>
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Nombre de points d' Habileté permettant blablabla...
                </Tooltip>
              }
            >
              <p className="hud-carac_title">Habileté</p>
          </OverlayTrigger>
            <img className="pic-arrow_right-siz see" src="src/data/bluearrow.png" alt="arrow"/>
          </div>
          <div className="hud-carac_display">
          Nombre de dé(s) : 
            <div className="hud-carac_display-cadre">
              {player.habileté}
            </div>
          </div>
        </div>

        <div className="hud-carac">
          <div className="separateur-2">
            <img className="pic-arrow_left-siz see" src="src/data/bluearrow.png" alt="arrow"/>
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Nombre de points de blindage permettant blablabla...
                </Tooltip>
              }
            >
              <p className="hud-carac_title">Blindage</p>
          </OverlayTrigger>
            <img className="pic-arrow_right-siz see" src="src/data/bluearrow.png" alt="arrow"/>
          </div>
          <div className="hud-carac_display">
            Point(s) de restant(s) : 
            <div className="hud-carac_display-cadre">
              {player.blindage}
            </div>
          </div>
        </div>

        <div className="hud-carac">
          <div className="separateur-2">
            <img className="pic-arrow_left-siz see" src="src/data/bluearrow.png" alt="arrow"/>
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Nombre de points de victoire permettant blablabla...
                </Tooltip>
              }
            >
              <p className="hud-carac_title">Point(s) de Victoire</p>
          </OverlayTrigger>
            <img className="pic-arrow_right-siz see" src="src/data/bluearrow.png" alt="arrow"/>
          </div>
          <div className="hud-carac_display">
            <p>Point(s) de restant(s) : </p>
            <div className="hud-carac_display-cadre">
              {player.ptvict}
            </div>
          </div>
        </div>
        
      </div>

      <div className="separateur-3">

        <div className="hud-tuner">
          <OverlayTrigger
            key="top"
            placement="top"
            overlay={
              <Tooltip id="tooltip-top">
                Dépense 3 points de victoires pour réparer ton ship de 1D6
              </Tooltip>
            }
          >
            <p className="hud-notice">Répare ton ship de 1D6 pour 3 P.V.</p>
          </OverlayTrigger>
          <img
            src="src/data/tools.png"
            alt="tools"
            className="hud-icon"
            onClick={() => modifCarac('blindage', 3, 2)}
          />
        </div>

        <div className="hud-tuner">
          <OverlayTrigger
            key="top"
            placement="top"
            overlay={
              <Tooltip id="tooltip-top">
                Dépense 8 points de victoires pour améliorer ton habileté !
              </Tooltip>
            }
          >
            <p className="hud-notice">Améliore ton habileté de 1 pour 8 P.V.</p>
          </OverlayTrigger>
          <img
            src="src/data/compass.png"
            alt="compass"
            className="hud-icon"
            onClick={() => modifCarac('habileté', 8)}
          />
        </div>

      </div>

    </div>

    <>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title> {message} </Modal.Title>
        </Modal.Header>
      </Modal>
    </>


  </Container>

}