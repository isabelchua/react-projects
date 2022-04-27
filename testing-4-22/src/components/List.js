import React from "react";
// import { data } from "./Data";
import Item from "./Item";

const List = ({ plushies }) => {
	return (
		<div>
			{plushies.map(plushi => (
				<Item plushi={plushi} />
			))}
		</div>
	);
};

export default List;
