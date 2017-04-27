import React from 'react';
import './RoomListItem.css';
import Timeline from '../Timeline/Timeline';

class RoomListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const {name, location, capacity} = this.props.room;
    return (
      <div className="room-container">
        <div className="room-info">
          <h2 className="room-name">Room {name}</h2>
          <h4 className="room-location">{location}</h4>
          <h4 className="room-capacity">Fits {capacity} people</h4>
        </div>
        <div className="times-display">
          <Timeline room={this.props.room}/>
        </div>
      </div>
    );
  }
};

export default RoomListItem;
