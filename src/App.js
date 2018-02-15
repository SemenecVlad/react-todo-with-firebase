import React, { Component } from "react";
import firebase from "firebase";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { config } from "./config";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
