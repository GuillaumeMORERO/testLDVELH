import React from 'react';
import ClassNames from 'classnames';
import { useSelector } from 'react-redux';

import { Container } from 'react-bootstrap';

import './style.scss';

export default () => {

  const { showed } = useSelector(state => state.combat);
  const { show } = useSelector(state => state.buy);
  const { contactShow } = useSelector(state => state.contact);

  const activeClass = ClassNames(
    'footer',
    {
      blured: showed || show || contactShow
    }
  );

  return <Container id="footer" fluid className={activeClass}>

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