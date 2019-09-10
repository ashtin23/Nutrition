import React, { Component } from "react";
import { Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
        // <div className="App">
        //   <Nav />
        //   <div className="body">
        //     <Home />
        //   </div>
        // </div>
        <div>
          <main>
            <Nav />
            <Route path="/"
            component={Home}
            />
          </main>
        </div>
    );
  }
}

export default App;
