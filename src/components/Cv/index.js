import React, { useState } from 'react';

import { Container, Accordion, Card, Button, ListGroup } from 'react-bootstrap';

// import { Test } from 'src/components/Cv/dataCv'

import './style.scss';

export default ({ datas }) => {
  // console.log( 'datas :', datas);
  // console.log( 'id :', datas.id);
  // console.log( 'titre carte :', datas[0].titreCarte);
  // console.log( 'titre accordeon :', datas[0].titreAccord);
  // console.log( 'liste :', datas[0].liste);


  return <Container fluid className="cv">

    {/* <div className="test">
      {datas.map((item) => (
        <p key={item.id} >titre = {item.liste}</p>
        
      ))}
    </div> */}

    <div className="pic">
      <img className="pic-ture" src="src/data/AbothProfil.jpg" alt="Tête de vainqueur"/>
    </div>
    <div className="elem">

      <Accordion defaultActiveKey="1" bsPrefix="accordion">
        {datas.map((item) => (
          <Card key={item.id}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={item.id}>
                <h1 className="titrecarte"> {item.titreCarte} </h1>
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

        {/* <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <h1 className="titrecarte">Ici de la formation</h1>
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <h2 className="titreaccord">
                <span>Janvier 2020 : Développeur Web/Web Mobile,</span> titre pro. RNCP Grande Ecole du Numérique, délivré par <span>O’Clock</span>
              </h2>
              
              <ListGroup>
                <ListGroup.Item>- Socle de formation : HTML, SCSS, Bootstrap, JS, PHP, jQuery, GIT</ListGroup.Item>
                <ListGroup.Item>- Spécialisation : React.JS : Redux, Hooks, Axios, Middleware</ListGroup.Item>
                <ListGroup.Item>- Projets : conception d’un site e-commerce et d’un tchat</ListGroup.Item>
                <ListGroup.Item>- Compétences développées : méthode Agile, Kanban, conception de cahier des charges (MLD, user stories…)</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card> */}

        {/* <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              <h1 className="titrecarte">Ici de l'experience</h1>
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <h2 className="titreaccord">
                Déc. 2019 :<span> Lead Dev Front web / mobile </span>(projet de formation)
              </h2>
              
              <ListGroup>
                <ListGroup.Item>Développer l’application « SeeMyGames » en équipe de 5 personnes : gestionnaire de bibliothèque de jeux vidéo</ListGroup.Item>
                <ListGroup.Item>Importer des données depuis l’API de Steam via le Middleware</ListGroup.Item>
                <ListGroup.Item>Mise en oeuvre de l’interface utilisateur : gestion des states (Redux et Hooks)</ListGroup.Item>
                <ListGroup.Item>Concevoir le design front responsive : SCSS et Bootstrap</ListGroup.Item>
                <ListGroup.Item>Créer un back-office personnalisé avec WordPress et codage de plug-ins</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card> */}

      </Accordion>

    </div>

  </Container>
}