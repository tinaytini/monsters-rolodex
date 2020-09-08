import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


 class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'hello Tina'
    };
  }

  
  render() {
    const buttonClick = () => {
      this.setState({string: 'hello Kuba'})
    }
    const removeName = () => {
      this.setState({string: "    "})
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string} </p>
          <button onClick={buttonClick} onDoubleClick={removeName}>click</button>
            Learn React
        </header>
      </div>
    );
  }
 }


export default App;