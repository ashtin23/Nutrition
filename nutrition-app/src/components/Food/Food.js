import React, { Component } from "react";
import "./Food.css";


class Food extends Component {



  render() {
    // console.log(this.state)
    // console.log(this.props)

    return (
      <div className="body">
        <h2>{this.props}</h2>
      </div>
    );
  }
}

export default Food;
