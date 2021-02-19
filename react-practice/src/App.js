import { useState } from "react";

function App() {
	return (
		<div className="App">
			<Folder name="Desktop" isOpen={false}>
				<Folder name="Music">
					<File name="all_star.mp4" />
					<File name="express_file.mp4" />
				</Folder>

				<File name="cats.jpg" />
				<File name="dogs.jpg" />
			</Folder>
			{/* <Folder name="hello 2" food="cake" drink="coffee" /> */}
			<Folder name="Applications" />

			{/* <Folder name="hi" /> */}
		</div>
	);
}

const Folder = props => {
	const [isOpen, setIsOpen] = useState(false);
	console.log(isOpen);
	console.log(setIsOpen);
	const { name, children } = props;
	console.log(props);
	// console.log(props);
	// const borderStyle = { border: "2px solid pink" };
	const handleClick = () => {
		//console.log("clicked");
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<span onClick={handleClick}>{name}</span>

			<h3>{props.food}</h3>
			<div style={{ marginLeft: "19px" }}>{isOpen ? children : null}</div>
		</div>
	);
};

const File = props => {
	return <h5>{props.name}</h5>;
};

export default App;
