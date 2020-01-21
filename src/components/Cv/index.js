import React from 'react';

import { Container } from 'react-bootstrap';

import './style.scss';

export default () => {

  return <Container fluid className="cv">
  ici un CV
  <div className="pic">
    <img className="pic-ture" src="src/data/AbothProfil.jpg" alt="Tête de vainqueur"/>
  </div>
  <div className="elem">
    <div id="formation" className="elem-section"></div>
    <div id="xp" className="elem-section"></div>
    <div id="interest" className="elem-section"></div>
  </div>





  </Container>
}