import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Register from "./components/Register/Register";

class App extends Component {
state = {
    //This object is reserved for the Dropdown menu of all pages for the all roles
    dropDownData: {
      //This property will hold dropdown button name
      caption: "your new menu",

      //this property will hold action items for the menu
      data: ["action 1", "action 2", "action 3"]
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Switch>
          {
            //I am passing state to Homepage using props. Endpoint will receive "forDropDown" prop. Now go to Homepage
          }
          <Route exact path="/" render={(props) => <Homepage {...props} forDropDown={this.state.dropDownData} />} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;
