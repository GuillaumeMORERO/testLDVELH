import React from 'react';

import { useSelector } from 'react-redux';

import { Container, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';

import './style.scss';

export default ({ datas }) => {



  const player = useSelector(state => state.player);

  return <Container
    fluid
    className="eader"
    id="eader"
    style={{display: player.choosen ? '' : 'none' }}
  >

    <a href="/" className="eader-titre1">
      <h1 className="eader-titre2">Mon essai fonctionnalités</h1>
    </a>
    
    <Navbar expand="lg" variant="dark" bg="none" className="eader-barre">
      <Navbar.Brand href="/" className="eader-barre_lien">Home</Navbar.Brand>
      <Navbar.Brand href="#cv" className="eader-barre_lien">CV</Navbar.Brand>
      <DropdownButton id="dropdown-basic-button" bsPrefix="poly" title="CV/Elem">
        {datas.map((item) => (
          <Dropdown.Item key={item.id} className="poly-ancre" href={'#' + item.id}> {item.id}.{item.titreCarte}</Dropdown.Item>
        ))}
      </DropdownButton>
      <Navbar.Brand href="#sheet" className="eader-barre_lien">Fiche</Navbar.Brand>

    </Navbar>

  </Container>

};