import React, { Component } from "react";
import Result_Xuc_Xac from "./Result_Xuc_Xac";
import Xuc_Xac from "./Xuc_Xac";
import "./gameTaiXiu.css";
import { connect } from "react-redux";
import { playGameAction } from "../redux/actions/gameTaiXiu";

class Game_Tai_Xui extends Component {
  render() {
    return (
      <div className="gameTaiXiu text-center">
        <h1 className="mt-5">Game Tài Xỉu</h1>
        <Xuc_Xac />
        <Result_Xuc_Xac />
        <button
          onClick={() => {
            this.props.playGame();
          }}
          className="btn btn-success"
        >
          Play Game
        </button>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      dispatch(playGameAction());
    },
  };
};

export default connect(null, mapDispatchToProps)(Game_Tai_Xui);
