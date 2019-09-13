import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router} from 'react-router-dom'
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import List from "../List/List";
import Food from "../Food/Food";
import "./App.css";
import axios from "axios";

const foodUrl = "http://localhost:3131/api/macronutrients";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: [],
      servingSize: 0,
      calories: 0,
      macronutrients: [
        {
          fat: 0,
          protein: 0,
          carbohydrates: 0
        }
      ]
    };
  }

  componentDidMount() {
    // console.log(this.state);
    axios
      .get(foodUrl)
      .then(res => {
        // console.log(res.data[0].report.foods[0].name)
        res.data[0].report.foods.forEach(i => {
          let temp = res.data[0].report.foods[i].name
          temp.push(i.name)
          this.setState({
            name: temp
          })
       })
        
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleClick = (e) => {
    console.log(e.target.key)
    this.setState({ 
        listing : e.target.key
    })
}

  render() {
    return (
        <div className="App">
          <main>
            <Nav />
            <Route path="/"
            exact render={(routeProps) => <Home {...routeProps} />}
            />
            <Route path="/list"
            exact render={(routeProps) => <List {...routeProps} />}
            />
            <Route path="/food"
            exact render={(routeProps) => <Food {...routeProps} />}
            />
          </main>
        </div>
    );
  }
}

export default withRouter(App);
