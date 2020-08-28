import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  DataLoaded: () => dispatch({ type: "IS_LOADING" }),
  fetchInfo: (url) => dispatch(fetchInfoList(url)),
  getSongId: (id) => dispatch(getSelectedSong(id)),
  addToFavorites: (id) => dispatch({ type: "ADD_TO_FAVORITES", payload: id }),
  removeFromFavorites: (id) =>
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id }),
});

const getSelectedSong = (id) => {
  return async (dispatch, getState) => {
    if (id) {
      dispatch({
        type: "SONG_ID",
        payload: id,
      });
    }
  };
};

const fetchInfoList = (url) => {
  return async (dispatch, getState) => {
    const response = await fetch(url, {
      method: "GET",

      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    let songs = await response.json();
    console.log(songs);
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
      "http://localhost:3232/deezer/album/" + this.props.match.params.id;

    this.props.fetchInfo(url);
    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    let localData = await response.json();

    this.setState({ localData: localData.cover_medium });
    setTimeout(this.props.DataLoaded, 2000);
  };

  render() {
    return (
      <>
        <div className="favorites-list">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-star-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          <span className="ml-2">
            {this.props.selectedSong.favorites.length}
          </span>
        </div>
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
                  <li
                    className="track-class mt-1"
                    onClick={() => {
                      this.props.getSongId(track.title);
                    }}
                  >
                    <div className="track-icon-class">
                      <p>{track.title}</p>
                      {!this.props.selectedSong.favorites.includes(
                        track.id
                      ) && (
                        <>
                          <svg
                            onClick={() => {
                              this.props.addToFavorites(track.id);
                            }}
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            class="bi bi-star"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                            />
                          </svg>
                        </>
                      )}
                      {this.props.selectedSong.favorites.includes(track.id) && (
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-star-fill"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() =>
                            this.props.removeFromFavorites(track.id)
                          }
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          {console.log(
                            "AFTERREMOVING",
                            this.props.selectedSong.favorites
                          )}
                        </svg>
                      )}
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </Col>
        </Row>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
