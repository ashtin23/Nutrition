import React, { Component } from "react";
import "./Food.css";
import axios from "axios";

const foodUrl = "http://localhost:3131/api/macronutrients";

class Food extends Component {
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
        console.log(res.data[0].report.foods[0].name)
        res.data[0].report.foods.forEach(i => {
          let temp = this.state.name
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


  render() {
    // console.log(this.state)

    return (
      <div className="body">
        <h2>{this.state.name[105]}</h2>
      </div>
    );
  }
}

export default Food;
