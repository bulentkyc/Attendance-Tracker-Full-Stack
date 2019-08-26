import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Register from "./components/Register/Register";
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;