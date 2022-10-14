import { createArrRadom } from "../../util/createArrRadom";
import { LUA_CHON, PLAY_GAME } from "../constants/gameTaiXiu";

let initialState = {
  arrXucXac: [1, 1, 1],
  luacChon: "",
  soLanThang: 0,
  soLanChoi: 0,
};

export let gameTaiXiuReducer = (state = initialState, action) => {
  switch (action.type) {
    case LUA_CHON: {
      return { ...state, luacChon: action.payload };
    }
    case PLAY_GAME: {
      state.arrXucXac = createArrRadom();
      console.log(" state.arrXucXac: ", state.arrXucXac);

      state.soLanChoi++;
      let sum = state.arrXucXac.reduce((tong, item, index) => (tong += item));

      sum >= 11 && state.luacChon === "Tài" && state.soLanThang++;
      sum <= 10 && state.luacChon === "Xỉu" && state.soLanThang++;

      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
