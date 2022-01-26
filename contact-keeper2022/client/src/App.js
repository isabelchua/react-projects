import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				test
			</div>
		</Router>
	);
}

export default App;
