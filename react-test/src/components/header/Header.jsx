import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Isabel</h1>
				<h5 className="text-light">Fullstack Developer</h5>
				<CTA />

				<div className="me">
					<img src={ME} alt="my profile" />
				</div>
			</div>
		</header>
	);
};

export default Header;
