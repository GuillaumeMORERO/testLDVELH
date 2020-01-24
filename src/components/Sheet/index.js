import React, { useState } from 'react';

import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';

import './style.scss';

export default () => {

  return <Container fluid className="sheet" id="sheet" >

    <div className="pic">
      <img className="pic-arrow_left" src="src/data/bluearrow.png" alt="arrow"/>
      <div className="pic-ture">
        <img className="pic-ture_head" src="src/data/Aboth.png" alt="Tête de vainqueur"/>
      </div>
      <img className="pic-arrow_right" src="src/data/bluearrow.png" alt="arrow"/>
    </div>

    <div className="hud">

      <div className="hud-name">
        <h1 className="hud-name_perso">Nom du perso</h1>
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
           nombre de points d' habileté
          </div>
        </div>

        <div className="hud-carac">
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
        <div className="hud-carac_display">
          quantité de blindage
        </div>
      </div>
      
        <div className="hud-carac">
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={
            <Tooltip id="tooltip-top">
              Nombre de points de victoire permettant blablabla...
            </Tooltip>
          }
        >
          <p className="hud-carac_title">Points de victoires</p>
        </OverlayTrigger>
        <div className="hud-carac_display">
          nombre de points de victoire
        </div>
      </div>

      </div>

    </div>

  </Container>

}