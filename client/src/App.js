import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Register from "./pages/register";
import Login from "./pages/login";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/search";

// import "./App.css";

const App = () => (
  <Wrapper className="Site">
    <Router>
      <div className="Site-content">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Search} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </Wrapper>
);

export default App;
