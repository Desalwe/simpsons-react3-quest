import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lamp from "./lamp.js";


class App extends Component {
  constructor() {
    super()
    this.state = {
      working: true
    }
  }

    handleClick = () => {
      this.setState({ working: !this.state.working });  
  }
  

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={ this.state.working ? "App-logo" : "App-logo-stop" } alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.handleClick}>Homer: work/break</button>

        <Lamp on />
        <Lamp />
      </div>
    );
  }
}

export default App;