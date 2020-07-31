import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  DataLoaded: () => dispatch({ type: "IS_LOADING" }),
  fetchInfo: (url) => dispatch(fetchInfoList(url)),
  // getSongId: (id) => dispatch(getSelectedSong(id)),
});
const fetchInfoList = (url) => {
  return async (dispatch, getState) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "dc428aeb3dmshb072b11435b2a9fp126ba5jsnfb0d8dd5e710",
      },
    });
    let songs = await response.json();

    if (songs) {
      dispatch({
        type: "GET_INFO_LIST",
        payload: songs.tracks.data,
      });
    }
    console.log("GETSTATE", getState());
  };
};
class Tracks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localData: "",
    };
  }

  componentDidMount = async () => {
    let url =
      "https://deezerdevs-deezer.p.rapidapi.com/album/" +
      this.props.match.params.id;

    this.props.fetchInfo(url);
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "dc428aeb3dmshb072b11435b2a9fp126ba5jsnfb0d8dd5e710",
      },
    });
    let localData = await response.json();

    this.setState({ localData: localData.cover_medium });
    setTimeout(this.props.DataLoaded, 2000);
  };
  render() {
    return (
      <Row>
        <Col className="cols-4 ">
          <img
            style={{ position: "fixed", bottom: "349px" }}
            src={this.state.localData}
          />
        </Col>
        <Col>
          <ul className="ultracks-class">
            {this.props.info.infolist.map((track) => (
              <>
                <li className="track-class mt-1">
                  <div>
                    <p>{track.title}</p>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </Col>
      </Row>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
