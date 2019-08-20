import React, { Component } from 'react';
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Registration from "./components/Registration/Registration";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    data: ""
  };


  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from index.js
  callBackendAPI = async () => {
    const response = await fetch("http://localhost:5000/express_backend");
    const body = await response.json();
    console.log(body);
    this.setState({ data: 'responce from the server' });
    console.log(this.state);

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
    ;
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
        </Switch>
        <p>server get should be here {this.state.data} </p>
      </div>
    );
  }
}

export default App;





<<<<<<< HEAD
=======
=======
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
>>>>>>> master
>>>>>>> 3b58cd9635fede3bd32530db630c2934a60ecdfe
