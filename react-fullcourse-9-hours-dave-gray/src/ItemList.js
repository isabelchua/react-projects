import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
	return (
		<>
			{items.length < 1 && "no items to show"}
			<ul>
				{items.map(item => (
					<LineItem
						key={item.id}
						item={item}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				))}
			</ul>
		</>
	);
};

export default ItemList;
