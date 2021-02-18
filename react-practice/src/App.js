function App() {
	return (
		<div className="App">
			<Folder name="Desktop">
				<h3>some stuff</h3>
				<h4>other things</h4>
				<File name="cats.jpg" />
				<File name="dogs.jpg" />
			</Folder>
			<Folder name="hello 2" food="cake" drink="coffee" />
			<Folder name="Applications" />

			<Folder name="hi" />
		</div>
	);
}

const Folder = props => {
	console.log(props);
	const name = "this name";
	const borderStyle = { border: "2px solid pink" };
	return (
		<div style={borderStyle}>
			<h2>{props.name}</h2>
			<h3>{props.food}</h3>
			{props.children}
		</div>
	);
};

const File = props => {
	return <h5>{props.name}</h5>;
};

export default App;
