import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./List.css";

import axios from "axios";



class List extends Component {
 constructor(props) {
   super(props);

 } 
  
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