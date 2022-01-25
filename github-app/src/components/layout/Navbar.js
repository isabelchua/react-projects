import React, { Component } from "react";

const Navbar = props => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<i className={props.icon} />
				{props.title}
			</h1>
		</nav>
	);
};
Navbar.defaultProps = {
	title: "Github Finder",
	icon: "fab fa-github"
};

export default Navbar;
