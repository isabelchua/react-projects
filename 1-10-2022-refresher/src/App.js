import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
	const title = "Welcome!";
	const likes = 50;
	const link = "www.google.com";
	//const person = {name: 'yoshi', age: 30}

	return (
		<div className="App">
			<Navbar />
			<div className="content">
				<Home />
				<h1>{title}</h1>
				<p>liked {likes} times</p>
				<p> {Math.random() * 10}</p>
				<a href={link}>Google</a>
			</div>
		</div>
	);
}

export default App;
