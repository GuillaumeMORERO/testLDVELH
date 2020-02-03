import { combineReducers } from 'redux';

import player from 'src/store/player/reducer';
import cv from 'src/store/cv/reducer';
import combat from 'src/store/combat/reducer';
import message from 'src/store/message/reducer';
import foe from 'src/store/foe/reducer';
import buy from 'src/store/buy/reducer';
import contact from 'src/store/contact/reducer';

export default combineReducers({
  player,
  cv,
  combat,
  message,
  foe,
  buy,
  contact
});
