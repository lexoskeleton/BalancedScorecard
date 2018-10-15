import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import HeaderLinks from "../Header/HeaderLinks.jsx";

import imagine from "../../assets/img/back.jpg";
import logo from "../../assets/img/reactlogo.png";

import dashboardRoutes from "../../routes/dashboard.jsx";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + imagine + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color="black"
        data-image={imagine}
      >
        <div className="sidebar-background" style={sidebarBackground} />
        <div className="logo">
          <a href="" className="simple-text logo-mini">
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a href="" className="simple-text logo-normal">
            V I S I O N
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {/* <li className="nav-item">
              <Link
                to="/home"
                className={
                  window.location.pathname === "/home"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <i className="pe-7s-home" />
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className={
                  window.location.pathname === "/dashboard"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <i className="pe-7s-graph" />
                DASHBOARD
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/userProfile"
                className={
                  window.location.pathname === "/userProfile"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <i className="pe-7s-user" />
                USER PROFILE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/home"
                className={
                  window.location.pathname === "/home"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <i className="pe-7s-news-paper" />
                TABLE LIST
              </Link>
            </li> */}
            {this.state.width <= 991 ? <HeaderLinks /> : null}
            {dashboardRoutes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : this.activeRoute(prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
