import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Clicked')
  }
  
  render() {
    console.log(this.props);

    return (
      <div className="body">
        <h2>Get started by searching for your favorite food!</h2>
        <form className="search">
          <input type="text"></input>
          <button type="submit" onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Home;
