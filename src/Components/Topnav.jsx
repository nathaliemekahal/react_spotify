import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  ListGroup,
} from "react-bootstrap";
import Gallery from "./Gallery";
import { withRouter } from "react-router-dom";

class Topnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchinput: "first value",
    };
  }
  catchChange = (e) => {
    let searchinput = e.currentTarget.value;
    console.log("search input", searchinput);
    // this.setState({searchinput})
    // console.log('state',this.state.searchinput)

    this.setState(
      {
        searchinput: searchinput,
      },
      () => {
        this.props.history.push("/searchResults/" + searchinput);
      }
    );
  };

  render() {
    return this.props.location.pathname === "/loginPage" ||
      this.props.location.pathname === "/register" ? (
      ""
    ) : (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          class="upperbar-wrapper pb-4 pr-2"
          style={{
            position: "fixed",

            zIndex: "300",
          }}
        >
          <div class="row d-flex justify-content-center">
            <ul class="list-group list-group-horizontal nav">
              <li class="nav-item topBar">
                <div class="col">
                  <a
                    class="nav-link listOfPages"
                    onclick="styleClick(event)"
                    href="#"
                  >
                    TRENDING
                  </a>
                  <div class="underLine d-block"> </div>
                </div>
              </li>
              <li class="nav-item topBar">
                <div class="col">
                  <a
                    class="nav-link listOfPages"
                    onclick="styleClick(event)"
                    href="#"
                  >
                    PODCAST
                  </a>
                  <div class="underLine d-none"></div>
                </div>
              </li>
              <li class="nav-item topBar">
                <div class="col">
                  <a
                    class="nav-link listOfPages"
                    onclick="styleClick(event)"
                    href="#"
                  >
                    MOODS AND GENRES
                  </a>
                  <div class="underLine d-none"></div>
                </div>
              </li>
              <li class="nav-item topBar">
                <div class="col">
                  <a
                    class="nav-link listOfPages"
                    onclick="styleClick(event)"
                    href="#"
                  >
                    NEW REALEASES
                  </a>
                  <div class="underLine d-none"></div>
                </div>
              </li>
              <li class="nav-item topBar">
                <div class="col">
                  <a
                    class="nav-link listOfPages"
                    onclick="styleClick(event)"
                    href="#"
                  >
                    DISCOVER
                  </a>
                  <div class="underLine d-none"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <Form inline style={{ paddingTop: "0.7rem", paddingRight: "1rem" }}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={this.catchChange}
          />
        </Form> */}
      </div>
    );
  }
}

export default withRouter(Topnav);
