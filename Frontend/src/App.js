import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Register from "./components/Register/Register";

class App extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;