import React from 'react';

import ClassNames from 'classnames';

import { useSelector } from 'react-redux';

import { Container, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';

import './style.scss';

export default ({ datas }) => {

  const player = useSelector(state => state.player);
  const { showed } = useSelector(state => state.combat);
  const { show } = useSelector(state => state.buy);

  const activeClass = ClassNames(
    'eader',
    {
      blured: showed || show
    }
  );

  return <Container
    fluid
    className={activeClass}
    id="eader"
    style={{display: player.choosen ? '' : 'none' }}
  >

    <Navbar expand="lg" variant="dark" bg="none" className="eader-barre-lateral">
      <Navbar.Brand href="/" className="eader-barre_lien">Choisir un autre Pirate / Recommencer</Navbar.Brand>
      <Navbar.Brand href="#cv" className="eader-barre_lien">CV</Navbar.Brand>
    </Navbar>

    <a href="/" className="eader-titre1">
      <img className="frame-haut" src="src/data/framehigh.png" alt="framehigh"/>
      <h1 className="eader-titre2">CV - Guillaume MORERO</h1>
      <img className="frame-haut" src="src/data/framelow.png" alt="framelow"/>
    </a>

    <Navbar expand="lg" variant="dark" bg="none" className="eader-barre-lateral">
      <DropdownButton id="dropdown-basic-button" bsPrefix="poly" title="CV/Elem">
        {datas.map((item) => (
          <Dropdown.Item key={item.id} className="poly-ancre" href={'#section' + item.id}> {item.id}.{item.titreCarte}</Dropdown.Item>
        ))}
      </DropdownButton>
      <Navbar.Brand href="#sheet" className="eader-barre_lien">Fiche</Navbar.Brand>
    </Navbar>

  </Container>

};