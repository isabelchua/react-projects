import React from "react";

const Footer = ({ list }) => {
	return (
		<div>
			{list.length} List Item{list.length > 1 && "s"}
		</div>
	);
};

export default Footer;
