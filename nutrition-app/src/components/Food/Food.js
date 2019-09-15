import React, { Component } from "react";
import "./Food.css";


class Food extends Component {

  render() {
    // console.log(this.props.data[0])
    return (
      <div className="body">
        <div className="container">
        <h2>name: {this.props.name}</h2>
        <h2>serving size: {this.props.servingSize}</h2>
        <h2>calories: {this.props.calories}</h2>
        <h2>fat: {this.props.macronutrients}</h2>
        <h2>protein: {this.props.macronutrients}</h2>
        <h2>carbohydrates: {this.props.macronutrients}</h2>
        </div>
      </div>
    );
  }
}

export default Food;
