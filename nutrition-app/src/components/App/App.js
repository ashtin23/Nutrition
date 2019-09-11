import React, { Component } from "react";
import { Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import List from "../List/List";
import Food from "../Food/Food";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state= {
      name: "",
      macronutrients: {
        fat: 0,
        carbohydrates: 0,
        protein: 0
      }
    }
  }
  

  render() {
    return (
        <div>
          <main>
            <Nav />
            <Route path="/"
            exact component={Home}
            />
            <Route path="/list"
            exact component={List}
            />
            <Route path="/food"
            exact component={Food}
            />
          </main>
        </div>
    );
  }
}

export default App;
