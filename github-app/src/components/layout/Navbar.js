import React, { Component } from "react";

class componentName extends Component {
	render() {
		return (
			<nav className="navbar bg-primary">
				<h1>
					<i className={this.props.icon} />
					{this.props.title}
				</h1>
			</nav>
		);
	}
}

export default componentName;
