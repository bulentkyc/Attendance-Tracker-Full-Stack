import React from 'react';
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello from App</h1>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </Switch>

    </div>
  );
}

export default App;
