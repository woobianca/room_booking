import React from 'react';
import './RoomListItem.css';

class RoomListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div className="roomItemCell">
				<h2>Room {this.props.room.name}</h2>
			</div>
		);
	}
};

export default RoomListItem;
