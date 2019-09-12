import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./List.css";

import axios from "axios";

const foodUrl = "http://localhost:3131/api/macronutrients";


class List extends Component {
 constructor(props) {
   super(props);

   this.state = {
     unit: []
   }
 } 
 
  componentDidMount() {
    // console.log(this.props);
    axios
      .get(foodUrl)
      .then(res => {
        // console.log(res.data[0].report.foods[0].nutrients[0].unit)
        // console.log(res.data[0].report.foods[0].nutrients[0].value)
        res.data[0].report.foods[0].nutrients.forEach(i => {
          let temp = this.state.unit
          temp.push(i.unit)
          this.setState({
            unit : temp
          })
        })
        
      })
      .catch(err => {
        console.error(err);
      });
  }
  
  render() {
    console.log(this.state);
    return (
      <div>
        <main>
          <ul>
            <li>
              <Link to="/food">
                Apple
                </Link>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default List;