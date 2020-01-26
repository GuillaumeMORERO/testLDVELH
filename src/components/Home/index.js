import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Container, Card, Button, ListGroup } from 'react-bootstrap';

import './style.scss';

import {
  chargePirate
} from 'src/store/player/actions';

export default ({pirates}) => {


  return <Container fluid className="home">
    <div className="disclaimer">
      <h1 className="disclaimer-1">Bienvenue Sur mon CV en ligne !!</h1>
      <h2 className="disclaimer-2">Ca va être spécial : faut débloquer dees trucs.</h2>
      <h2 className="disclaimer-2">Et pour ce faire, faut être mal accompagné :</h2>
    </div>

    <div className="choix">
      <div className="choix-cadre">
        <img className="choix-arrow_left see" src="src/data/bluearrow.png" alt="arrow"/>
        <p className="choix-titre">Choisissez votre Pirate !</p>
        <img className="choix-arrow_right see" src="src/data/bluearrow.png" alt="arrow"/>
      </div>
      
      <div className="pirates">
        {pirates.map((pirate) => (
          <a key={pirate.id} href="#" className="pirates-choice">
            <h3 className="pirates-choice_name">{pirate.name}</h3>    
            <img className="pirates-choice_avtr" src={pirate.avatar} alt=""/>
          </a>
        ))}
      </div>
      
    </div>

    {/* {pirates.map((pirate) => (
      <Card className="carte" key={pirate.id}>
        <div className="carte-toop">
          <Card.Img className="carte-toop_avatar" variant="top" src={pirate.avatar} />
          <Card.Body className="carte-toop_carac">
            <Card.Title className="carte-toop_carac-titre"> {pirate.name} </Card.Title>
            <ListGroup className="carte-toop_carac-liste">
              <ListGroup.Item><Card.Text>Habileté : <span>{pirate.skill}</span></Card.Text></ListGroup.Item>
              <ListGroup.Item><Card.Text>Blindage : <span>{pirate.blindage}</span></Card.Text></ListGroup.Item>
              <ListGroup.Item><Card.Text>{pirate.descr}</Card.Text></ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </div>
        <Button className="carte-bot" variant="primary">Je choisis celui-la !</Button>
      </Card>
    ))} */}


  </Container>
}