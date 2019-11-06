// import createStore from 'create-store';
import createStore from './createStore';


import reducer from './reducer';


const reactModelStore = createStore(reducer);
console.log(reactModelStore);
window.store = reactModelStore;

export default reactModelStore;
