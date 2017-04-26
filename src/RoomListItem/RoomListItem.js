import React from 'react';
import './RoomListItem.css';

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
				<h2>Room {name}</h2>
				<h4>{location}</h4>
				<h4>Fits {capacity} people</h4>
			</div>
		);
	}
};

export default RoomListItem;
