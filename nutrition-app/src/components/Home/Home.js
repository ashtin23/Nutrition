import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

class Home extends Component {
    constructor(props) {
      super(props);
    }

  render() {

    return (
      <div className="body">
        <h2>Get started by searching for your favorite food!</h2>
        <form className="search">
          <input type="text"></input>
          {/* <button type="submit" onClick={this.setRedirect}>Submit</button> */}
          <Link to="/food">
            Search
          </Link>
        </form>
      </div>
    );
  }
}

export default Home;
