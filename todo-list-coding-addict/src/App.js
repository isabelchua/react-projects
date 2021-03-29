import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
	state = {
		items: [],
		id: uuidv4(),
		item: "",
		editItem: false
	};
	handleChange = e => {
		this.setState({
			item: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		const newItem = {
			id: this.state.id,
			title: this.state.item
		};
		console.log(newItem);

		const updatedItems = [...this.state.items, newItem];
		this.setState({
			items: updatedItems,
			item: "",
			id: uuidv4(),
			editItem: false
		});
	};

	clearList = () => {
		this.setState({
			items: []
		});
	};

	handleDelete = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id);
		this.setState({
			items: filteredItems
		});
	};

	handleEdit = id => {
		console.log(id);
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h3 className="text-capitalize text-center">input</h3>
						<TodoInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
						/>
						<TodoList
							items={this.state.items}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
