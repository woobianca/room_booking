import React from 'react';
import './RoomListItem.css';
import Timeline from '../Timeline/Timeline';
import ExpandMore from 'react-icons/lib/fa/angle-right'
import Collapse from 'react-icons/lib/fa/angle-down';
import RoomDetails from '../RoomDetails/RoomDetails';
import Booking from '../Booking/Booking';

class RoomListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      showForm: false
    }
    this.handleDetails = this.handleDetails.bind(this);
    this.handleBooking = this.handleBooking.bind(this);
  }

  componentWillReceiveProps(nextProps, currentProps) {
    if(nextProps.selectedDay !== currentProps.selectedDay) {
      this.setState({showDetails: false});
    }
  }

  handleDetails() {
    this.setState({showDetails: !this.state.showDetails})
  }

  handleBooking(e) {
    this.setState({showForm: !this.state.showForm})
    console.log('TIME: ', e.target.getAttribute("data-time"))
  }

  render() {
    const {name, location, capacity} = this.props.room;
    // this.state.showDetails ? let height = 
    return (
      <div className="room-container" /*style={{height}}*/>
        <div className="default-view">
          <div className="expand-icon" onClick={this.handleDetails}>
            { this.state.showDetails ? <Collapse /> : <ExpandMore /> }
          </div>
          <div className="room-info" onClick={this.handleDetails}>
            <h2 className="room-name">Room {name}</h2>
            <h4 className="room-location">{location}</h4>
            <h4 className="room-capacity">Fits {capacity} people</h4>
          </div>
          <div className="times-display">
            <Timeline room={this.props.room} onClickTime={this.handleBooking}/>
          </div>
        </div>
        { this.state.showDetails ? 
          <div className="room-details">
            <RoomDetails room={this.props.room}/>
          </div> : null
        }
        { this.state.showForm ? 
          <div className="booking-form">
            <Booking room={this.props.room}/>
          </div> : null
        }
      </div>
    );
  }
};

export default RoomListItem;
