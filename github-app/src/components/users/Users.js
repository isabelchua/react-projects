import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
	state = {
		users: [
			{
				id: "1",
				login: "ead",
				avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
				html_url: "https://api.github.com/users/mojombo"
			},
			{
				id: "2",
				login: "test3 ",
				avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
				html_url: "https://api.github.com/users/mojombo"
			},
			{
				id: "3",
				login: "hello",
				avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
				html_url: "https://api.github.com/users/mojombo"
			}
		]
	};
	render() {
		return (
			<div style={userStyle}>
				{this.state.users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
}

const userStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gridGap: "1rem"
};
export default Users;
