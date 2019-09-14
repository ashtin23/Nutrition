import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./List.css";

class List extends Component {
  
  render() {
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