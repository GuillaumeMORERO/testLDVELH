import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Modal, Button, Card, Alert } from 'react-bootstrap';

import './style.scss';

import { changeBlindage, changePV } from 'src/store/player/actions';
import { hideCombatModal, showScores, resetScores } from 'src/store/combat/actions';
import { blindageLoss } from 'src/store/foe/actions';
import { changeMessage } from 'src/store/message/actions';


export default () => {

  const dispatch = useDispatch();
  const player = useSelector(state => state.player);
  const { showed, resultPlayer, resultFoe } = useSelector(state => state.combat);
  const foe = useSelector(state => state.foe);
  const { message } = useSelector(state => state.message);

  // const [message, setMessage] = useState('');

  const handleClose = () => {
    dispatch(hideCombatModal());
    dispatch(resetScores());
  };
  
  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const dieRoll = () => {
    return entierAleatoire(1, 6)
  };
  const characLaunch = (habileté) => {
    const d6 = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let lancé = 0;
    while ( lancé < habileté ) {
      lancé++;
      d6.push(dieRoll());
    }
    return d6.reduce(reducer, 0);
  };
  const playerWin = (result) => {
    if (foe.blindage > result) {
      dispatch(blindageLoss(result));
      dispatch(changeMessage('Vous avez infligé ' + result + ' point(s) de dégâts au blindage de l\'ennemi !'));
      
    } 
    if (foe.blindage <= result) {
      dispatch(changePV(foe.gain));
      dispatch(changeMessage('Vous avez vaincu votre ennemi ! vous remportez ' + foe.gain + ' Points de Victoire !'));
      setTimeout(() => {
        dispatch(hideCombatModal())
      }, 3000);
    } 
  };
  const foeWin = (nbr) => {
    const result = nbr - (nbr*2);
    if (player.blindage > result) {
      dispatch(changeBlindage(nbr));
      dispatch(changeMessage('L\'ennemi a infligé ' + result + ' point(s) de dégâts a votre blindage !'));
      
    } 
    if (player.blindage <= result) {
      dispatch(changeBlindage(nbr));
      dispatch(changeMessage('Vous êtes vaincu...'));
      setTimeout(() => {
        dispatch(hideCombatModal())
      }, 3000);
    } 
  };
  const fighting = (habPlayer, habFoe) => {
    const scorePlayer = characLaunch(habPlayer);
    const scoreFoe = characLaunch(habFoe);

    dispatch(showScores(scorePlayer, scoreFoe));

    const result = scorePlayer - scoreFoe;
    if (result > 0) {
      console.log('resultat du combat - player wins - :', result);
      playerWin(result);
    };
    if (result < 0) {
      console.log('resultat du combat - foe wins - :', result);
      foeWin(result);
    };
    if (result === 0) {
      console.log('resultat du combat - match naze - :', result);
      dispatch(changeMessage('Personne ne remporte cette passe... continuez à vous battre !'));
    };
  }; 

  return <div className="combat">

    <Modal show={showed} onHide={handleClose} size="xl" centered id="combatModal">

      <div className="combackdrop">

        <Modal.Header className="combat-titre">
          <Modal.Title className="combat-titre-txt">
            <div>Ici on se bagarre !!</div>  
            <div>Si celui d'en face est trop difficile (...Mouais...), ferme cette fenêtre et ouvre la à nouveau.</div>  
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="combat-corps">

          <div className="arene">

            <section className="player">

              <h1 className="player-name">{player.nom}</h1>
              <h2 className="player-descr">{player.descr}</h2>

              <div className="player-carac">

                <img className="player-carac_avatar" id="caracPlayer" src={player.avatar} alt="avatar"/>
                <div className="player-carac_contains">
                  <div className="player-carac_contains-comp">
                    <p id="espace">Habileté</p>
                    <div id="spanbr">{player.habileté}</div>
                  </div>
                  <div className="player-carac_contains-comp">
                    <p id="espace">Blindage</p>
                    <div id="spanbr">{player.blindage}</div>
                  </div>
                </div>

              </div>
            
            </section>

            <section className="foe">
            <h1 className="foe-name">{foe.name}</h1>
            <h2 className="foe-descr">{foe.descr}</h2>

            <div className="foe-carac">

              <img className="foe-carac_avatar" src={foe.avatar} alt="avatar"/>
              <div className="foe-carac_contains">
                <div className="player-carac_contains-comp">
                  <p id="espace">Habileté</p>
                  <div id="spanbr">{foe.skill}</div>
                </div>
                <div className="player-carac_contains-comp">
                  <p id="espace">Blindage</p>
                  <div id="spanbr">{foe.blindage}</div>
                </div>
              </div>

            </div>
          </section>

          </div>
          <div className="btncenter">
            <button
              className="btncenter-fight"
              type="button"
              onClick={() => fighting(player.habileté, foe.skill)}
              style={{display: player.blindage <= 0 ? 'none' : '' }}
            >
              Fight !!!
            </button>
          </div>

        </Modal.Body>

        <Modal.Footer className="combat-pied">
          <div className="displayer" style={{display: resultPlayer ? '' : 'none' }}>
            <div className="infoDice">
              <span id="espace">Avec {player.habileté} dé(s), tu obtiens :</span>   
              <span id="spanbr">{resultPlayer}</span>
            </div>
            <div className="infoCombat">{message}</div>
            <div className="infoDice">
              <span id="espace">Avec {foe.skill} dé(s), {foe.name} a obtenu :</span> 
              <span id="spanbr">{resultFoe}</span>
            </div>
          </div>
        </Modal.Footer>

      </div>

    </Modal>

  </div>
}