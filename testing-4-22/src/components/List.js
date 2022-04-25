import React from "react";
import { data } from "./Data";
import Item from "./Item";

const List = () => {
	return (
		<div>
			{data.map(data => (
				<li>
					<Item data={data} />
				</li>
			))}
		</div>
	);
};

export default List;
