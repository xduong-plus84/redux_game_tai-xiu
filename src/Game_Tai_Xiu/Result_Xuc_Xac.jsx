import React, { Component } from "react";
import { connect } from "react-redux";

class Result_Xuc_Xac extends Component {
  render() {
    return (
      <div className="resultXucXac">
        <p>
          Bạn chọn:
          <span className="text-danger mx-2">{this.props.luacChon}</span>
        </p>
        <p>
          Số lần thắng:
          <span className="text-primary mx-2">{this.props.soLanThang}</span>
        </p>
        <p className="d-5">
          Số lần chơii:
          <span className="text-success mx-2">{this.props.soLanChoi}</span>
        </p>
      </div>
    );
  }
}

//rxm
let mapStateToProps = (state) => {
  return {
    luacChon: state.gameTaiXiuReducer.luacChon,
    soLanThang: state.gameTaiXiuReducer.soLanThang,
    soLanChoi: state.gameTaiXiuReducer.soLanChoi,
  };
};

export default connect(mapStateToProps, null)(Result_Xuc_Xac);
