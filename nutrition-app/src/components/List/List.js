import React, { Component } from "react";
import "./List.css";

class List extends Component {
 constructor() {
   super(props);
 } 
 
  componentDidMount() {
    // console.log(this.state);
    axios
      .get(foodUrl)
      .then(res => {
        console.log(res.data[0].report.foods[0].name)
        res.data[0].report.foods.forEach(i => {
          let temp = this.state.name
          temp.push(i.name)
          this.setState({
            name: temp
          })
        })
        
      })
      .catch(err => {
        console.error(err);
      });
  }
  
  render() {
    console.log(this.props);

    return (
      <div>
        <main>
          <ul>
            <li>
              <Link />
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default List;