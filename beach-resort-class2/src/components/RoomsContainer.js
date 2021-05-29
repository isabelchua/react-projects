import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomList";

export default function RoomsContainer() {
	return (
		<div>
			Hello from rooms container
			<RoomsFilter />
			<RoomsList />
		</div>
	);
}
