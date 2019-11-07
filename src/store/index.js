import { createStore } from 'redux';


import reducer from './reducer';


const reactModelStore = createStore(reducer);
console.log(reactModelStore);
window.store = reactModelStore;

export default reactModelStore;
