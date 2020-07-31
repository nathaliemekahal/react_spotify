import React from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => state;
function FunctionBar(props) {
  return (
    <div className="function-bar">
      <div>
        <p style={{ color: "white" }}>{props.selectedSong.songId}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "83%" }}>
        <div className="second-section ">
          <div className="second-section-icons">
            <i
              className="fa fa-random"
              data-toggle="tooltip"
              data-placement="top"
              title="Shuffle"
            ></i>
            <i
              className="fa fa-backward ml-1"
              data-toggle="tooltip"
              data-placement="top"
              title="Backward"
            ></i>
            <i
              className="fa fa-play-circle ml-1"
              data-toggle="tooltip"
              data-placement="top"
              title="Play"
            ></i>
            <i
              className="fa fa-forward ml-1"
              data-toggle="tooltip"
              data-placement="top"
              title="forward"
            ></i>
            <i
              className="fa fa-repeat"
              data-toggle="tooltip"
              data-placement="top"
              title="Repeat"
            ></i>
          </div>
          <div className="nb custom-progress-bar mt-1">
            <span className="mr-2">0:00</span>
            <div className="horizontal-line "></div>
            <span className="nb ml-2">7:00</span>
          </div>
        </div>
      </div>
      <div className="third-section">
        <div className="third-section-icons">
          <i className="fa fa-list-ul"></i>
          <i className="fa fa-headphones"></i>
          <i className="fa fa-volume-down"></i>
        </div>
        <div className="thirdsection-horizontal-line ml-1"></div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(FunctionBar);
