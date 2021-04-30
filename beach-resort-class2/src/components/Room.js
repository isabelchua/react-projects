import React from "react";
import { Link } from "react-router-dom";

export default function Room({ room }) {
	console.log("rrooom" + room);
	const { name, slug, images, price } = room;

	return (
		<article className="room">
			<img src={images[0]} alt="" />
		</article>
	);
}
