import React, { Component } from "react";
import "./Food.css";


class Food extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props)
    return (
      <div className="body">
        <div className="container">
        <h2>Food Component</h2>
        
        </div>
      </div>
    );
  }
}

export default Food;
