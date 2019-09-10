import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import './App.css';


class App extends Component {
  
  render() {
  return (
    <div className="App">
      <Nav />
      <div className="body">
        <Home />
      </div>
    </div>
  );
}
}

export default App;
