/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

/**
 * Local import
 */
import App from 'src/components/App';

/**
 * Code
 */
const rootComponent = <App promo="Vortex" />;
const renderingArea = document.querySelector('#root');
render(rootComponent, renderingArea);
