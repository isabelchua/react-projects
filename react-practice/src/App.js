function App() {
	return (
		<div className="App">
			<Folder name="Desktop">some stuff</Folder>
			<Folder name="hello 2" food="cake" drink="coffee" />

			<Folder name="hi" />
			<File name="cats.jpg" />
			<File name="dogs.jpg" />
		</div>
	);
}

const Folder = props => {
	console.log(props);
	const name = "this name";
	return (
		<div>
			<h2>{props.name}</h2>
			<h3>{props.food}</h3>
		</div>
	);
};

const File = props => {
	return <h5>{props.name}</h5>;
};

export default App;
