import React, { Component } from "react";
import { NavItem, Nav } from "react-bootstrap";

class HeaderLinks extends Component {
  logout = event => {
    // event.preventDefault();
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("appUser");
    // this.props.push("/");
  };
  render() {
    return (
      <div>
        <Nav pullRight>
          <NavItem eventKey={3} href="/" onClick={this.logout}>
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
