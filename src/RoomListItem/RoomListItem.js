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
			<div>
				{this.props.room.name}
			</div>
		);
	}
};

export default RoomListItem;