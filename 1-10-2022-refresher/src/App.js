import logo from "./logo.svg";
import "./App.css";

function App() {
	const title = "Welcome!";
	const likes = 50;

	return (
		<div className="App">
			<div className="content">
				<h1>{title}</h1>
				<p>liked {likes} times</p>
			</div>
		</div>
	);
}

export default App;
