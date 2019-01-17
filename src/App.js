import React, { Component } from 'react';
import Render from "./render.jsx";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Render name="Rocky" age="33"/>
        <Render/>
        <Render/>
        <Render/>
      </div>
    );
  }
}

export default App;
