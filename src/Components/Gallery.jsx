import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import SideNavBar from "./SideNavBar";
import Topnav from "./Topnav";
import "bootstrap/dist/css/bootstrap.min.css";
import Tracks from "./Tracks";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  DataLoaded: () => dispatch({ type: "IS_LOADING" }),
  fetchSongs: (url) => dispatch(fetchSongsList(url)),
  // getSongId: (id) => dispatch(getSelectedSong(id)),
});

const fetchSongsList = (url) => {
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
        type: "GET_SONGS_LIST",
        payload: songs.data,
      });
    }
  };
};

// const getSelectedSong = (id) => {
//   return async (dispatch, getState) => {
//     if (id) {
//       dispatch({
//         type: "SONG_ID",
//         payload: id,
//       });
//     }
//   };
// };

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eminem: [],
      loading: true,
      selectedId: "",
      name: "",
      redirect: null,
    };
  }

  componentDidMount() {
    let url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem";

    this.props.fetchSongs(url);
    setTimeout(this.props.DataLoaded, 2000);
  }
  // changeRoute = () => {
  //   console.log("TRY IDIDID", this.props.selectedSong.songId);
  //   this.props.history.push("/tracks/" + this.props.selectedSong.songId);
  // };
  render() {
    return (
      <>
         <Topnav />
        <SideNavBar />
        {this.props.fetching.loading && (
          <Row
            className="justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <Spinner
              animation="grow"
              variant="light"
              style={{ marginLeft: "12%", marginBottom: "60px" }}
            />
          </Row>
        )}
        {!this.props.fetching.loading && (
          <>
            <h1 className="artistname">{this.state.name}</h1>

            <Row
              className="row row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 mb-4"
              style={{ paddingLeft: "9rem" }}
            >
              {this.props.songs.list.map((song) => (
                <>
                  <Link to={"/tracks/" + song.album.id}>
                    <Col xs={3} md={4}>
                      <Image
                        className="mb-2"
                        src={song.album.cover_medium}
                        // onClick={() => {
                        //   this.props.getSongId(song.album.id);
                        //   // this.changeRoute();
                        // }}
                      ></Image>
                    </Col>
                  </Link>
                </>
              ))}
            </Row>
          </>
        )}
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Gallery)
);
