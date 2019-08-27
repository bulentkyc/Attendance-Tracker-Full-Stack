import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

class App extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;