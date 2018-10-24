import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotificationSystem from "react-notification-system";
import axios from "axios";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

import { style } from "../variables/Variables";

import dashboardRoutes from "../routes/dashboard";

class Home extends Component {
  state = {
    jwtToken: localStorage.getItem("jwtToken")
  };
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    // this.handleNotificationClick = this.handleNotificationClick.bind(this);
    this.state = {
      _notificationSystem: null
    };
  }

  componentDidMount() {
    axios.defaults.headers.common["Authorization"] = this.state.jwtToken;
  }

  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }

  // logout = event => {
  //   event.preventDefault();
  //   localStorage.removeItem("jwtToken");
  //   localStorage.removeItem("appUser");
  //   this.props.history.push("/");
  // };

  render() {
    return (
      <div>
        {localStorage.getItem("jwtToken") ? (
          <div className="wrapper">
            <NotificationSystem ref="notificationSystem" style={style} />
            <Sidebar {...this.props} />
            <div id="main-panel" className="main-panel" ref="mainPanel">
              <Header {...this.props} />
              <Switch>
                {dashboardRoutes.map((prop, key) => {
                  if (prop.name === "Notifications")
                    return (
                      <Route
                        path={prop.path}
                        key={key}
                        render={routeProps => (
                          <prop.component
                            {...routeProps}
                            handleClick={this.handleNotificationClick}
                          />
                        )}
                      />
                    );
                  if (prop.redirect)
                    return <Redirect from={prop.path} to={prop.to} key={key} />;
                  return (
                    <Route
                      path={prop.path}
                      component={prop.component}
                      key={key}
                    />
                  );
                })}
              </Switch>
              <Footer />
            </div>
          </div>
        ) : (
          this.props.history.push("/")
        )}
      </div>
    );
  }
}

export default Home;
