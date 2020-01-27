import React from 'react';

import {  useSelector } from 'react-redux';


import { bubble as Menu } from 'react-burger-menu'

import './style.scss';

export default () => {

  const { choosen } = useSelector(state => state.player);

  const showSettings = (event) => {
    event.preventDefault();
    console.log('fais voir tes settings !');
  }


  return (
    <Menu
      customBurgerIcon={ <img src="src/data/arrowRight.svg" alt="arrow"/>}
      style={{display: choosen ? '' : 'none' }}
    >
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
      <a onClick={ showSettings } className="menu-item--small" href="">Settings</a>
    </Menu>
  )

};