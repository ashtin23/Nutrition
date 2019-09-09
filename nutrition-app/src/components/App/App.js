import React from 'react';
import './App.css';
import Nav from "../Nav/Nav";


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="body">
        <form>
          <input type="text"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
