import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    const divStyle = {
      display: 'flex',
      justifyContent: 'center',
    };

    const h1Style = {
      margin: '40px',
    };

    return (
      <div style={divStyle}>
        <h1 style={h1Style}>Image my city</h1>
      </div>
    );
  }
}

export default App;
