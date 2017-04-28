// @flow
import React, { Component } from 'react';
import logo from '../1aim_logo.png';
import './App.css';
import RoomList from '../RoomList/RoomList';
import moment from 'moment';
import "react-day-picker/lib/style.css"  
import axios from 'axios';
import baseURL from '../baseURL'
import Calendar from '../Calendar/Calendar';

axios.defaults.baseURL = baseURL;
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}  

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      selectedDay: +new Date() / 1000
    }
    this.fetchRooms = this.fetchRooms.bind(this);
  }

  componentDidMount() {
    this.fetchRooms(this.state.selectedDay);
  }

  fetchRooms(date) {
    console.log(date)
    this.setState({selectedDay: date})
    const context = this;
    axios.post('/getrooms', {date: date}, config)
      .then(function (response) {
        console.log(response)
        context.setState({rooms: response.data})
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    const formattedDate = moment.unix(this.state.selectedDay).format("dddd, DD MMM YYYY")
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">{formattedDate}</h2>
        </div>
        <div className="color-bar"></div>
        <div className="container">
          <Calendar fetchRooms={this.fetchRooms}/>
          <RoomList rooms={this.state.rooms} selectedDay={this.state.selectedDay}/>
        </div>
      </div>
    );
  }
}

export default App;
