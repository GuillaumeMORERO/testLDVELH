import React from 'react';

import { slide as Menu } from 'react-burger-menu'

import './style.scss';

export default () => {

  const showSettings = (event) => {
    event.preventDefault();
    console.log('fais voir tes settings !');
  }

  // const props = {
  //   width={ '20%' },
  //   customBurgerIcon={ <img src="img/icon.svg" /> }
  // }

  return  <Menu customBurgerIcon={ <img src="src/data/arrowRight.svg" /> } >
    <a id="home" className="menu-item" href="/">Home</a>
    <a id="about" className="menu-item" href="/about">About</a>
    <a id="contact" className="menu-item" href="/contact">Contact</a>
    <a onClick={ showSettings } className="menu-item--small" href="">Settings</a>
  </Menu>
};