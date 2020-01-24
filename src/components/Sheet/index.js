import React, { useState } from 'react';

import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import './style.scss';

export default () => {

  const dispatch = useDispatch();
  // const {
  //   nom,
  //   habileté,
  //   blindage,
  //   ptvict,
  //   avatar
  // } = useSelector(state => state.player);
  // console.log(nom, ptvict);

  const player = useSelector(state => state.player);
  console.log(player);
  console.log('nom :', player.nom);

  return <Container fluid className="sheet">

    <div className="pic">
      <img className="pic-arrow_left" src="src/data/bluearrow.png" alt="arrow"/>
      <div className="pic-ture">
        <img className="pic-ture_head" src={player.avatar} alt="Tête de vainqueur"/>
      </div>
      <img className="pic-arrow_right" src="src/data/bluearrow.png" alt="arrow"/>
    </div>

    <div className="hud">

      <div className="hud-name">
        <h1 className="hud-name_perso"> {player.nom} </h1>
      </div>

      <div className="separateur-1">

        <div className="hud-carac">
          <div className="separateur-2">
            <img className="pic-arrow_left-siz" src="src/data/bluearrow.png" alt="arrow"/>
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  Nombre de points d' Habileté' permettant blablabla...
                </Tooltip>
              }
            >
              <p className="hud-carac_title">Habileté</p>
           </OverlayTrigger>
            <img className="pic-arrow_right-siz" src="src/data/bluearrow.png" alt="arrow"/>
          </div>
          <div className="hud-carac_display">
           Nombre de dé(s) : 
            <div className="hud-carac_display-cadre">
              {player.habileté}
            </div>
          </div>
        </div>

        
      </div>

    </div>

  </Container>

}