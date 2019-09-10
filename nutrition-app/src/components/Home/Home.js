import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <form className="search">
          <input type="text"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Home;
