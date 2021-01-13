import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Image, Button, Icon } from "semantic-ui-react";

import logo from "../../assets/images/logo.svg";

function Header() {
	const { pathname } = useLocation();

	console.log("location", pathname);
	return (
		<div>
			<Menu secondary pointing>
				<Image src={logo} width={60} />
				<Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>
					TrulyContacts
				</Menu.Item>
				{pathname === "/" && (
					<Menu.Item position="right">
						<Button as={Link} to="/contacts/create" primary basic icon>
							<Icon name="add">Create Contact</Icon>
						</Button>
					</Menu.Item>
				)}
				{pathname === "/" && (
					<Menu.Item>
						<Button color="red" basic icon>
							<Icon name="log out">Logout</Icon>
						</Button>
					</Menu.Item>
				)}
			</Menu>
		</div>
	);
}

export default Header;
