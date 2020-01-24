import React from 'react';

import { Container } from 'react-bootstrap';

import './style.scss';

export default () => {
  return <Container fluid className="footer">

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
    </div>


  </Container>

}