import React, { Component } from "react";
import { Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import List from "../List/List";

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
            <Route path="/list"
            component={List}
            />
          </main>
        </div>
    );
  }
}

export default App;
