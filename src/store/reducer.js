import { combineReducers } from 'redux';

import votes from 'src/store/votes';
import player from 'src/store/player/reducer';
import cv from 'src/store/cv/reducer';
import combat from 'src/store/combat/reducer';
import dice from 'src/store/dice/reducer';

export default combineReducers({
  votes,
  player,
  cv,
  combat,
  dice
});
