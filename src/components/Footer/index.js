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
      <a href="https://github.com/GuillaumeMORERO/CV-online" className="liens-low">
        GitHub de ce CV
      </a>
      <a href="https://www.linkedin.com/in/guillaume-morero/" className="liens-low">
        LinkedIn
      </a>
      <a href="src/data/CV Guillaume Morero WEB_DEV_REACT.pdf" className="liens-low">
        Mon CV à télécharger
      </a>
      <a href="mailto:guillaume.morero@gmail.com" className="liens-low">Un p'tit mail ?</a>
    </div>


  </Container>

}