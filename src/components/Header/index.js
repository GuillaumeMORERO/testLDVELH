import React from 'react';

import { useSelector } from 'react-redux';

import { Container, Navbar } from 'react-bootstrap';

import './style.scss';

export default () => {

  const player = useSelector(state => state.player);

  return <Container
    fluid
    className="header"
    style={{display: player.choosen ? '' : 'none' }}
  >

    <a href="/" className="header-titre1">
      <h1 className="header-titre2">Mon essai fonctionnalités</h1>
    </a>

    <Navbar expand="lg" variant="dark" bg="none" className="header-barre">
      <Navbar.Brand href="/" className="header-barre_lien">Home</Navbar.Brand>
      <Navbar.Brand href="#cv" className="header-barre_lien">CV</Navbar.Brand>
      <Navbar.Brand href="#sheet" className="header-barre_lien">Fiche</Navbar.Brand>

    </Navbar>

  </Container>

};