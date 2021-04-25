import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
	static contextType = RoomContext;
	// class RoomProvider extends Component {
	// 	state = {
	// 		greeting: 'hello'
	// 	}
	// }

	render() {
		const { name, greeting } = this.context;
		//const value = this.context;
		//console.log(value);
		return (
			<div>
				{greeting} {name}
			</div>
		);
	}
}
