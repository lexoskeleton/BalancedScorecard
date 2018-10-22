import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
// import Home from "./pages/home.js";
// import App from "./App";
// import NoMatch from "./pages/NoMatch";
import indexRoutes from "./routes/index.jsx";

import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      {/* <Route path="*" component={NoMatch} /> */}
      {indexRoutes.map((prop, key) => {
        return <Route to={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

registerServiceWorker();
