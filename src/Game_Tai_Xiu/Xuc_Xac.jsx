import React, { Component } from "react";
import { connect } from "react-redux";
import { luachonAction } from "../redux/actions/gameTaiXiu";

class Xuc_Xac extends Component {
  render() {
    return (
      <div className="xucxac d-flex justify-content-around align-self-center">
        <button
          onClick={() => {
            this.props.luaChon("Tài");
          }}
          className="btnGame btn"
        >
          Tài
        </button>
        <div className="d-flex justify-content-around align-self-center">
          {this.props.arrXucXac.map((item, index) => {
            return (
              <img
                key={index}
                style={{ height: 50, width: 50 }}
                src={`./img/gameTaiXiu/${item}.png`}
              />
            );
          })}
        </div>
        <button
          onClick={() => {
            this.props.luaChon("Xỉu");
          }}
          className="btnGame btn"
        >
          Xỉu
        </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    arrXucXac: state.gameTaiXiuReducer.arrXucXac,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    luaChon: (value) => {
      dispatch(luachonAction(value));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Xuc_Xac);
