import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Container, Accordion, Card, Button, ListGroup } from 'react-bootstrap';

// import { Test } from 'src/components/Cv/dataCv'

import './style.scss';

export default ({ datas }) => {

  const { choosen } = useSelector(state => state.player);

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
                <h1 className="titrecarte"> {i+1}. {item.titreCarte} </h1>
                <img className="frame" src="src/data/framelow.png" alt="framelow"/>
              </Accordion.Toggle>
            </Card.Header>
            

            <Accordion.Collapse eventKey={item.id}>
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