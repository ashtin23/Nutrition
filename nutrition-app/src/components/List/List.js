import React, { Component } from "react";
import "./List.css";

class List extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <main>
          <h1>There will eventually be a list of common foods here.</h1>
        </main>
      </div>
    );
  }
}

export default List;