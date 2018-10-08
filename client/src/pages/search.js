import React, { Component } from "react";
import Main from "../components/Main";
import axios from "axios";
import Navigation from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

class Search extends Component {
  state = {
    jwtToken: localStorage.getItem("jwtToken")
  };

  componentDidMount() {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
  };

  logout = event => {
    event.preventDefault();
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("beeZUser");
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        {this.state.jwtToken ? (
          <div>
            <Navigation logout={this.logout} />
            <Sidebar />
            <Header />
            <Main className="searchPage" />
          </div>
        ) : (
          this.props.history.push("/login")
        )}
      </div>
    );
  }
}

export default Search;
