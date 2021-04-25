import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
	//static contextType = RoomContext;
	class RoomProvider extends Component {
		state = {
			greeting: 'hello'
		}
	}
	render() {
		const value = this.context;
		console.log(value);
		return <div>FeaturedRooms {value}</div>;
	}
}
