import React, { Component } from "react";
import { Row, Card } from "react-materialize";

class NoMatch extends Component {
  logout = event => {
    event.preventDefault();
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("beeZUser");
    this.props.history.push("/login");
  };

  render() {
    return (
      <Row>
        <Card className="orange-text white center-align">
          <h1 className="center">Ouch! This page doesn't exist.</h1>
        </Card>
      </Row>
    );
  }
}

export default NoMatch;
