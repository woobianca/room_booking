// @flow
import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Rooms from '../Rooms/Rooms'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Room Bookings</h2>
        </div>
        <Rooms />
      </div>
    );
  }
}

export default App;
