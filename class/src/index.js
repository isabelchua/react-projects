import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { seconds: 0 };
	}

	tick() {
		this.setState(state => ({
			seconds: state.seconds + 1
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return <div>Seconds: {this.state.seconds}</div>;
	}
}

class HelloMessage extends React.Component {
	render() {
		return <div>Hello {this.props.name}</div>;
	}
}

ReactDOM.render(
	<React.StrictMode>
		<Timer />
		<HelloMessage name="Isabel" />
	</React.StrictMode>,
	document.getElementById("root")
);
