import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav">
            <div className="left">
              <Link className="link" to="/">
                <h1>Nutrition App</h1>
              </Link>
            </div>
            <div className="right">
              <Link to="/list" className="item" key={1}>
                Common Foods
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
