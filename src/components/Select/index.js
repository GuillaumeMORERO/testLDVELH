import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Container, Card, Button, ListGroup, Modal } from 'react-bootstrap';

import './style.scss';

import {
  chargePirate
} from 'src/store/player/actions';

export default ({pirates}) => {

  const player = useSelector(state => state.player);
  // console.log('carac du player : ', player);
  console.log('choisi ? ', player.choosen);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    // console.log('id choisi :', e);
    // console.log('pirates', pirates[e])
    dispatch(chargePirate(pirates[e]));
    handleClose();
  }

  return <Container
    fluid
    className="home"
    style={{display: player.choosen ? 'none' : '' }}

  >



    <div className="disclaimer">
      <h1 className="disclaimer-1">Bienvenue Sur mon CV en ligne !!</h1>
      <h2 className="disclaimer-2">Ca va être spécial : faut débloquer dees trucs.</h2>
      <h2 className="disclaimer-2">Et pour ce faire, faut être mal accompagné :</h2>
    </div>

    <div className="choix">
      <div className="choix-cadre">
        <img className="choix-arrow_left see" src="src/data/bluearrow.png" alt="arrow"/>
        <p className="choix-titre" onClick={handleShow}>Choisissez votre Pirate !</p>
        <img className="choix-arrow_right see" src="src/data/bluearrow.png" alt="arrow"/>
      </div>
    </div>

    <>

      <Modal
        show={show}
        onHide={handleClose}
        centered size="xl"
        className="select"
      >
        <Modal.Header closeButton>
          <Modal.Title>Choisis ton Pirate !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="pirates">
            {pirates.map((pirate) => (
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
                <Button
                  className="carte-bot"
                  variant="primary"
                  onClick={() => onSubmit(pirate.id)}
                >
                  Je choisis celui-la !

                </Button>
              </Card>
          ))}
        </div>
        </Modal.Body>
      </Modal>
    </>

  </Container>
}