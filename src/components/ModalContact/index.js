import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Modal } from 'react-bootstrap';

import './styles.scss';

import { hideContactModal } from 'src/store/contact/actions';

export default () => {

  const dispatch = useDispatch();
  const { contactShow } = useSelector(state => state.contact);

  const handleClose = () => {
    dispatch(hideContactModal());
  };

  return <div className="contact">

    <>
      <Modal show={contactShow} onHide={handleClose} size="lg" centered className="myModal">

        <Modal.Header className="myModal-tete">
          <Modal.Title className="myModal-tete-titre">CONTAAAACT !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="myModal-corps">

          <h1 className="myModal-corps_name">
            Guillaume MORERO - 2020
          </h1>

          <div className="liensContact">
            <a href="https://github.com/GuillaumeMORERO/testLDVELH" className="liensContact-high">
              GitHub de ce CV
            </a>
            <a href="https://www.linkedin.com/in/guillaume-morero/" className="liensContact-high">
              LinkedIn
            </a>
            <a href="src/data/CV Guillaume Morero WEB_DEV_REACT.pdf" className="liensContact-high">
              Mon CV à télécharger
            </a>
            <a href="mailto:guillaume.morero@gmail.com">Un p'tit mail ?</a>
          </div>

        </Modal.Body>
        
      </Modal>
    </>

  </div>

}