import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Modal, Button, Card, Alert } from 'react-bootstrap';

import './style.scss';

import { hideBuyModal } from 'src/store/buy/actions';
import { changeStatus } from 'src/store/cv/actions';
import { changePV } from 'src/store/player/actions';

export default ({ datas }) => {
  
  const dispatch = useDispatch();
  const { ptvict, nom, avatar } = useSelector(state => state.player);
  const readable = useSelector(state => state.cv);
  const { showed } = useSelector(state => state.buy);

  const [message, setMessage] = useState('');

  const handleClose = () => {
    dispatch(hideBuyModal());
  };

  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const d4plus1Roll = () => {
    return entierAleatoire(2, 5)
  };
  const currentCost = d4plus1Roll();

  const buyOpening = (id, cost) => {
    setMessage('');
    console.log('pour acheter', id, cost);
    if ( ptvict >= cost ) {
      const realCost = cost - (cost * 2);
      dispatch(changePV(realCost));
      dispatch(changeStatus(id));
      setMessage('ok c\'est good');
    }
    if ( ptvict < cost ) {
      setMessage('c\'est pas good sale batar');
    }
    
  };

  return <div className="buy">

    <>
      <Modal show={showed} onHide={handleClose} size="xl" centered id="buyModal">
        <Modal.Header className="buy-titre">
          <Modal.Title className="buy-titre-txt">Ici on achete des ouvertures de section...</Modal.Title>
        </Modal.Header>

        <Modal.Body className="buy-corps">
          <div className="buy-corps_contains">
            <section className="buy-corps_contains-sections">
              {datas.map((item) => (
                <div key={item.id}>
                  <div className="buy-corps_contains-sections-list">
                    { readable[item.id] && 
                      <>
                        <h1
                          className="teteSection-titrecarte"
                          style={{color: '#009465'}}>
                          {item.id}. {item.titreCarte} <div className="min"> - disponible !!! -</div> 
                        </h1>
                      </>
                      }
                    { !readable[item.id] && 
                      <>
                        <h1
                          className="teteSection-titrecarte"
                          style={{color: '#9c4563'}}>
                          {item.id}. {item.titreCarte} <div className="min"> - non disponible !!! -</div>  
                        </h1>
                        <h2
                          className="teteSection-buy"
                          onClick={() => buyOpening(item.id, currentCost)}>
                          Pour ouvrir : {currentCost} points de victoires...
                        </h2>
                      </>
                    }
                  </div>
                  
                </div>
              ))}
            </section>
            <section className="buy-corps_contains-infos">
              <img src={avatar} alt="avatar" className="buy-corps_contains-infos-avatar"/>
              <div className="buy-corps_contains-infos-reste"> {nom}, il vous reste {ptvict} points de victoire. </div>
            </section>

          </div>
        </Modal.Body>

        <Modal.Footer className="buy-pied">
          <div className="infoBuy">{message}</div>
        </Modal.Footer>
      </Modal>
    </>

  </div>
}