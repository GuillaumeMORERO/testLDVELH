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
      <Modal show={contactShow} onHide={handleClose} centered className="myModal">

        <Modal.Header className="myModal-tete">
          <Modal.Title className="myModal-titre">CONTAAAACT !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="myModal-corps">

        <h1 className="name">
          Guillaume MORERO - 2020
        </h1>

        <div className="liens">
          <a href="#" className="liens-low">
            Contactez-moi !
          </a>
          <a href="https://github.com/GuillaumeMORERO/testLDVELH" className="liens-low">
            GitHub de ce CV
          </a>
          <a href="https://www.linkedin.com/in/guillaume-morero/" className="liens-low">
            LinkedIn
          </a>
          <a href="src/data/CV Guillaume Morero WEB_DEV_REACT.pdf" className="liens-low">
            Mon CV à télécharger
          </a>
        </div>

        </Modal.Body>
        
      </Modal>
    </>

  </div>

}