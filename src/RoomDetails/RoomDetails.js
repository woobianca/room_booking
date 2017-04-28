import React from 'react';
import baseURL from '../baseURL'
import './RoomDetails.css';

const RoomDetails = (props) => {
  const { name, equipment, images, size} = props.room;
  const equip = equipment.map(item => {
    return <li>{item}</li>
  })
  const photos = images.map(image => {
    var imageURL = `${baseURL}/${image}`;
    return <a href={imageURL}><img src={imageURL} alt={name} className="photo"/></a>
  })
  return (
    <div>
      <p>Equipment:</p>
      <ul>{equip}</ul>
      <p>Size: {size}</p>
      <div className="room-photos">{photos}</div>
    </div>
  )
}

export default RoomDetails;
