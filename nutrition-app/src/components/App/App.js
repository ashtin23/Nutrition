import React, { Component } from "react";
import { Route } from "react-router-dom";
// import { withRouter } from "react-router-dom";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import List from "../List/List";
import Food from "../Food/Food";
import "./App.css";
import axios from "axios";

const macroUrl = "http://localhost:3131/api/macronutrients";
// const foodUrl = "http://localhost:3131/api/food";

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


  // componentDidMount(){
  //   axios.get(foodUrl)
  //     .then(res => {
  //       console.log(res.data)
  //       res.data[0].list.item.forEach(i => {
  //         // let temp = res.data[0].list.item[i].name
  //         this.setState({ name: res.data[0].list.item[i]})
  //       })
  //     })
  // }

  componentDidMount() {
    // console.log(this.state);
    axios
      .get(macroUrl)
      .then(res => {
        // let myData = res.data[0].report.foods[0];
        res.data[0].report.foods.forEach(i => {
          let temp = res.data[0].report.foods[i].name
          temp.push(i.name)
          this.setState({
            name: res.data[0].report.foods[i].name,
            servingSize: res.data[0].report.foods[i].measure,
            calories: res.data[0].report.foods[i].nutrients[0],
            macronutrients: [
              {
              fat: res.data[0].report.foods[i].nutrients[1],
              protein: res.data[0].report.foods[i].nutrients[2],
              carbohydrates: res.data[0].report.foods[i].nutrients[3]
              }
            ]
          })
       })
       console.log(this.state)

      })
      .catch(err => {
        console.error(err);
      });
  }

//   handleClick = (e) => {
//     console.log(e.target.key)
//     this.setState({ 
//         listing : e.target.key
//     })
// }

  render() {
    return (
        <div className="App">
          <main>
            <Nav />
            <Route path="/"
            exact render={(props) => <Home {...props} />}
            />
            <Route path="/list"
            exact render={(props) => <List {...props} />}
            />
            <Route path="/food"
            exact render={(props) => <Food {...props} />}
            />
          </main>
        </div>
    );
  }
}

export default App;
