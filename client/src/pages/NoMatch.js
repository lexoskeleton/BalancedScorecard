import React, { Component } from "react";
import { Row, Panel } from "react-bootstrap";

class NoMatch extends Component {
  // logout = event => {
  //   event.preventDefault();
  //   localStorage.removeItem("jwtToken");
  //   localStorage.removeItem("appUser");
  //   this.props.history.push("/");
  // };

  render() {
    return (
      <Row>
        <Panel className="orange-text white center-align">
          <h1 className="center">Ouch! This page doesn't exist.</h1>
        </Panel>
      </Row>
    );
  }
}

export default NoMatch;
