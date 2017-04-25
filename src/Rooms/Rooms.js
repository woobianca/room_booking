import React from 'react';
import RoomList from '../RoomList/RoomList';
import './Rooms.css';
import axios from 'axios';
import baseURL from '../baseURL'

axios.defaults.baseURL = baseURL;
const config = {
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}

class Rooms extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rooms: [],
			date: "now"
		}
	}

	componentDidMount() {
		const context = this;
		console.log(axios.defaults.baseURL)
		axios.post('/getrooms', {date: this.state.date}, config)
		  .then(function (response) {
		    console.log(response);
		    context.setState({rooms: response.data})
		  })
		  .catch(function (error) {
		    console.log(error);
		  })
	}

	render() {
		return (
			<div>
				<RoomList rooms={this.state.rooms} />
			</div>
		) 
	}

}

export default Rooms;
