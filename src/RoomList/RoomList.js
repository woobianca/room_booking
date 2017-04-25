import React from 'react';
import RoomListItem from '../RoomListItem/RoomListItem';
import './RoomList.css';

const RoomList = (props) => {

	const rooms = props.rooms.map(room => {
		return <RoomListItem key={room.name} room={room} />
	})
	
	return (
		<div>
			{rooms}
		</div>
	);
}

export default RoomList;
