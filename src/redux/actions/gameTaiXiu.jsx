//rxaction

import { LUA_CHON, PLAY_GAME } from "../constants/gameTaiXiu";

export let luachonAction = (value) => {
  return {
    type: LUA_CHON,
    payload: value,
  };
};

export let playGameAction = () => {
  return {
    type: PLAY_GAME,
  };
};
