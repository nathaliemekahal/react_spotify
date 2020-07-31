import React, { Component } from "react";
import { connect } from "react-redux";

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
    console.log("TRACKS", songs);

    // if (songs) {
    //   dispatch({
    //     type: "GET_INFO_LIST",
    //     payload: songs.tracks.data,
    //   });
    // }
  };
};
class Tracks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albumImage: "",
    };
  }

  componentDidMount = () => {
    let url =
      "https://deezerdevs-deezer.p.rapidapi.com/album/" +
      this.props.match.params.id;

    this.props.fetchInfo(url);
    setTimeout(this.props.DataLoaded, 2000);
    // let albumImage = this.props.songs.list.album.cover_small;
    // this.setState({ albumImage });
  };
  render() {
    return (
      <ul className="ultracks-class">
        {this.props.info.infolist.map((track) => (
          <>
            {/* <img src={this.state.albumImage} /> */}
            <li className="track-class mt-1">
              <p>{track.title}</p>
            </li>
          </>
        ))}
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
