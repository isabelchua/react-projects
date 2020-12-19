import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
	const [showLinks, setShowLinks] = useState();
	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="logo" />
					<button
						className="nav-toggle"
						onClick={() => setShowLinks(!showLinks)}
					>
						<FaBars />
					</button>
				</div>
				{showLinks && (
					<div className="links-container show-container">
						<ul className="links">
							{/* <li>
							<a href="#">home</a>
						</li>
						<li>
							<a href="#">about</a>
						</li>
						<li>
							<a href="#">contact</a>
						</li>
						<li>
							<a href="#">products</a>
						</li> */}
							{links.map(link => {
								const { id, url, text } = link;
								return (
									<li key={id}>
										<a href={url}>{text}</a>
									</li>
								);
							})}
						</ul>
					</div>
				)}
				<ul className="social-icons">
					{/* <li>
						<a href="https://www.twitter.com">
							<FaTwitter />
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com">
							<FaTwitter />
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com">
							<FaTwitter />
						</a>
					</li> */}
					{social.map(socialIcon => {
						const { id, url, icon } = socialIcon;
						return (
							<li key={id}>
								<a href={url}>{icon}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
