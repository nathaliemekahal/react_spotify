import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  catchInput = (e) => {
    switch (e.target.value) {
      case "name":
        this.setState({ user: { ...this.state.user, name: e.target.value } });
        break;
      case "surname":
        this.setState({
          user: { ...this.state.user, surname: e.target.value },
        });
        break;
      case "email":
        this.setState({ user: { ...this.state.user, email: e.target.value } });
        break;
      case "pasword":
        this.setState({
          user: { ...this.state.user, password: e.target.value },
        });
        break;

      default:
        break;
    }
  };
  saveInputs = async () => {
    console.log("Save Inputs");
    const headers = {
      method: "POST",
      url: "http://localhost:3232/user/",
      data: this.state.user,
    };
    let data = await axios(headers);
    localStorage.setItem("token", data.data.token);
    if (data.data.token) {
      this.props.history.push("/home");
    }
  };
  render() {
    return (
      <div className="LoginPage">
        <div className="upper-header">
          <img src="/assets/logo.png" width="130px" className="mt-3" />
        </div>
        <a href="http://localhost:3232/user/facebookLogin">
          <Button className="mt-3">Login with Google</Button>
        </a>
        <div className="LoginPage__container mt-3">
          <input
            id="name"
            onChange={(e) => this.catchInput(e)}
            placeholder="enter name"
            type="name"
            className="mt-3"
          />
          <br />
          <input
            id="surname"
            onChange={(e) => this.catchInput(e)}
            placeholder="enter surname"
            type="surname"
            className="mt-3"
          />
          <br />
          <input
            id="email"
            onChange={(e) => this.catchInput(e)}
            placeholder="enter email"
            type="email"
            className="mt-3"
          />
          <br />
          <input
            id="password"
            onChange={(e) => this.catchInput(e)}
            placeholder="enter password"
            type="password"
            className="mt-3"
          />
          <br />
          <Button onClick={() => this.saveInputs()} className="mt-3">
            Register
          </Button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
