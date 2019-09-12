import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./List.css";

import axios from "axios";

const foodUrl = "http://localhost:3131/api/macronutrients";


class List extends Component {
 constructor() {
   super();
 } 
 
  componentDidMount() {
    // console.log(this.props);
    axios
      .get(foodUrl)
      .then(res => {
        console.log(res.data[0].report.foods[0].name)
        res.data[0].report.foods.forEach(i => {
          let temp = this.props.name
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
    console.log(this.props);

    return (
      <div>
        <main>
          <ul>
            <li>
              <Link />
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default List;