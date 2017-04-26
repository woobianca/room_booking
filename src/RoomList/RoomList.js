import React from 'react';
import RoomListItem from '../RoomListItem/RoomListItem';
import './RoomList.css';

const RoomList = (props) => {

	const rooms = props.rooms.map((room, i) => {
		return <RoomListItem key={i} room={room} />
	})

	return (
		<div className="list-container">
			{rooms}
		</div>
	);
}

export default RoomList;
