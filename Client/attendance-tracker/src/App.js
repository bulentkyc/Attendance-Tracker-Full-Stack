import React from 'react';
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Registration from "./components/Registration/Registration";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Hello from App</h1>
      <Switch>
        <Route exact path="/" Component={Homepage} />
        <Route path="/login" Component={Login} />
        <Route path="/registration" Component={Registration} />
      </Switch>
    </div>
  );
}

export default App;
