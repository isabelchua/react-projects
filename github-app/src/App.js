import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";

class App extends Component {
	state = {
		users: [],
		loading: false
	};
	// componentDidMount() {
	// axios
	// 		.get("https://api.github.com/users")
	// 		.then(res => console.log(res.data));
	// }
	async componentDidMount() {
		this.setState({ loading: true });
		const res = await axios.get("https://api.github.com/users");
		this.setState({ users: res.data, loading: false });
	}

	render() {
		return (
			<>
				<Navbar title="Github Finder" icon="fab fa-github" />
				<div className="container">
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</>
		);
	}
}

export default App;
