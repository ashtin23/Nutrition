import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./Home.css";
// import List from "../List/List"

class Home extends Component {
    constructor(props) {
      super(props);

      this.state= {
        redirect: false
      }
    }
  
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  } 
  
  renderRedirect = () => {
    if(this.state.redirect) {
      return <Redirect to='/food' />
    }
  }

  render() {
    console.log(this.props);

    return (
      <div className="body">
        <h2>Get started by searching for your favorite food!</h2>
        <form className="search">
          <input type="text"></input>
          <button type="submit" onClick={this.setRedirect}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Home;
