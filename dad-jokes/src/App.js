import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Register from "./register.js";
import Login from "./login.js";
import Jokes from "./jokes.js";
import { withRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Dad-Jokes</h1>
        <Route path="/" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/jokes" exact component={Jokes} />
      </div>
    );
  }
}

export default withRouter(App);
