import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Login.css";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addUser: (user) =>
    dispatch({
      type: "LOG_IN",
      payload: user,
    }),
});
class Login extends Component {
  state = {
    user: {},
  };
  catchValue = (e) => {
    let user = this.state.user;
    let id = e.currentTarget.id;
    user[id] = e.currentTarget.value;
    this.setState(
      {
        user,
      },
      () => {
        console.log("STATE", this.state.user);
      }
    );
  };
  render() {
    {
      console.log(this.props.user);
    }
    return (
      <Container style={{marginLeft:"25%", marginTop:"7%"}}>
      <div id="loginWrapper">
        <div style={{fontSize:"50px", color:"white"}}>Spotify</div>
        <div className="d-flex flex-column" style={{marginLeft:"20%"}}>
          <div>
            <button
              className="btn btn-fb text-uppercase"
              id="facebook-bttn"
              type="button"
            >
              <span>
                <i className="fa fa-facebook-f pr-2"></i> Continue with Facebook
              </span>{" "}
            </button>
          </div>
          <div>
            <button
              className="btn btn-google text-uppercase"
              id="apple-bttn"
              type="button"
            >
              <span>
                <i className="fa fa-apple pr-2" aria-hidden="true"></i> continue
                with Apple
              </span>{" "}
            </button>
          </div>
        </div>
        <hr data-content="OR" class="hr-text"></hr>
        <div className="d-flex flex-row">
          <div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  placeholder="Enter Username"
                  id="username"
                  onChange={(e) => {
                    this.catchValue(e);
                  }}
                />
                <Form.Text className="text-muted">
                  Please Enter A Valid Username
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => {
                    this.catchValue(e);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <Link to={"/Home"}>
                <Button
                  variant="primary"
                  onClick={() => this.props.addUser(this.state.user)}
                >
                  Log in
                </Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
