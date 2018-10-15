import React from "react";
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import NoMatch from "./pages/NoMatch";
import indexRoutes from "./routes/index.jsx";

// import "./App.css";

// const App = () => (
//   <HashRouter>
//     <Switch>
//       <Route exact path="/" component={Login} />
//       <Route exact path="/register" component={Register} />
//       <Route path="*" component={NoMatch} />
//       {indexRoutes.map((prop, key) => {
//         return <Route to={prop.path} component={prop.component} key={key} />;
//       })}
//     </Switch>
//   </HashRouter>
// );

export default App;
