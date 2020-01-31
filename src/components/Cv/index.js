import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Container, Accordion, Card, Button, ListGroup, Alert, Modal } from 'react-bootstrap';

import './style.scss';

import { changeStatus } from 'src/store/cv/actions';
import { displayCombatModal } from 'src/store/combat/actions';
import { chargeFoe } from 'src/store/foe/actions';
import { resetMessage } from 'src/store/message/actions';

export default ({ datas, foes }) => {

  // console.log('foesdu cV', foes[0])

  const dispatch = useDispatch();
  const { choosen } = useSelector(state => state.player);
  const { readable } = useSelector(state => state.cv);
  const message = useSelector(state => state.message);

  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  // const foeAleatoire = entierAleatoire(0, foes.length - 1);
  // console.log('log du CV :', foeAleatoire);
  // console.log('foesdu cV', foes[foeAleatoire]);

  const CombatTrigger = () => {
    console.log('clické!!');
    // dispatch(changeStatus())

    const foeAleatoire = entierAleatoire(0, foes.length - 1);
    dispatch(chargeFoe(foes[foeAleatoire]));
    dispatch(resetMessage());
    dispatch(displayCombatModal());
  };

  return <Container
    fluid
    className="cv"
    id="cv"
    style={{display: choosen ? '' : 'none' }}
  >

    <div className="pic">
      <img className="pic-arrow_left see" src="src/data/bluearrow.png" alt="arrow"/>
      <div className="pic-ture">
        <img className="pic-ture_head" src="src/data/Aboth.png" alt="Tête de vainqueur"/>
      </div>
      <img className="pic-arrow_right see" src="src/data/bluearrow.png" alt="arrow"/>
    </div>

    <div className="elem" id="elem">

      <Accordion defaultActiveKey="1" bsPrefix="accordion">
        {datas.map((item, i) => (
          <Card key={item.id} id={item.id}>
            
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={item.id}>
                <img className="frame" src="src/data/framehigh.png" alt="framehigh"/>
                <h1 className="titrecarte" style={{color: readable ? 'green' : 'red' }}> {i+1}. {item.titreCarte} </h1>
                <h2 className="trigger" onClick={() => CombatTrigger()}>Lance un fight !!</h2>
                <img className="frame" src="src/data/framelow.png" alt="framelow"/>
              </Accordion.Toggle>
            </Card.Header>
            

            <Accordion.Collapse eventKey={item.id} style={{display: readable ? '' : 'none' }}>
              <Card.Body>
              <h2 className="titreaccord">
                  {item.titreAccord}
                </h2>
                <ListGroup>
                  {item.liste.map((element, i) => (
                    <ListGroup.Item key={i}>
                      {element}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}

      </Accordion>

    </div>

  </Container>
}