import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";
import "./App.css";

class App extends Component {
	render() {
		return (
			<>
				<Navbar title="Github Finder" icon="fab fa-github" />
				<UserItem />
			</>
		);
	}
}

export default App;
