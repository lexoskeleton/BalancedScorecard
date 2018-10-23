import React, { Component } from "react";
import "../css/login.css";
import API from "../utils/API";
import imagine from "../assets/img/back.jpg";

import {
  Form,
  Col,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  ButtonToolbar
} from "react-bootstrap";

const sidebarBackground = {
  backgroundImage: "url(" + imagine + ")",
  color: "white"
};
class Login extends Component {
  state = {
    username: "",
    password: "",
    message: ""
  };

  onChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  onSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    API.loginSubmit({ username, password })
      .then(result => {
        localStorage.setItem("jwtToken", result.data.token);
        localStorage.setItem("appUser", this.state.username);
        this.setState({ message: "" });

        this.props.history.push("/home");
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.setState({
            message: error.response.data.msg
          });
        }
      });
  };

  render() {
    const { username, password, message } = this.state;
    return (
      <div className="Login">
        {/* <Row className="show-grid"> */}
        <Col md={6}>
          <div className="background" style={sidebarBackground}>
            <h1>Advanced Business Dashboard</h1>
            <p>Turn your data into insightful digital dashboards in minutes.</p>
          </div>
        </Col>
        <Col md={6}>
          <Form id="signup" onSubmit={this.onSubmit}>
            {message !== "" && (
              <div
                className="alert alert-warning alert-dismissible"
                role="alert"
              >
                <b>{message}</b>
              </div>
            )}
            <FormGroup controlId="email" bsSize="large">
              <h3 className="home">Welcome</h3>
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                placeholder="Email"
                name="username"
                value={username}
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <ButtonToolbar>
              <Button
                bsSize="large"
                type="submit"
                bsStyle="primary"
                // name="action"
              >
                Login
              </Button>
              <Button
                bsSize="large"
                // type="sign up"
                bsStyle="primary"
                // name="action"
                href="/register"
              >
                Sign Up
              </Button>
            </ButtonToolbar>
          </Form>
        </Col>
        {/* </Row> */}
      </div>
    );
  }
}

export default Login;
