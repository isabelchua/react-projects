import "./App.css";
import Header from "./Header";
import React from "react";

function App() {
	class Board extends React.Component {
		renderSquare(i) {
			return <Square value={i} />;
		}
	}

	class Square extends React.Component {
		render() {
			return <button className="square">{this.props.value}</button>;
		}
	}
}

export default App;
