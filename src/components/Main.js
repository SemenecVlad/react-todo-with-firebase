import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import TodoList from "./TodoList";
import LogIn from "./auth/LogIn";
import Register from "./auth/Register";
import Home from "./Home";
import ProfileImage from "./ProfileImage";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ProfileImage />
          </div>
          <div className="col-md-6">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/todo" component={TodoList} />
              <Route path="/login" component={LogIn} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
          <div className="col-md-3" />
        </div>
        <small>This is Main component</small>
      </div>
    );
  }
}

export default Main;
