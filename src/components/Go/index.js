import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';

import Header from 'src/components/Header'
import BurgerGauche from 'src/components/BurgerGauche'
import Cv from 'src/components/Cv'
import Sheet from 'src/components/Sheet'

export default ({ datas }) => {

  const player = useSelector(state => state.player);
  console.log('carac du player : ', player);

  return <div className="go">
    <BurgerGauche />
    <Header />
    <Cv datas={datas} />
    <Sheet />
  </div>

}