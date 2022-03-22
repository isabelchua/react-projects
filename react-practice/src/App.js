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
				<File name="dogs.png" />
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

	const direction = isOpen ? "down" : "right";
	console.log(props);
	// console.log(props);
	// const borderStyle = { border: "2px solid pink" };
	//test

	const handleClick = () => {
		//console.log("clicked");
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<span onClick={handleClick}>
				<i className="blue folder icon"></i>
				<i className={`caret ${direction} icon`}></i>
			</span>
			{name}
			<h3>{props.food}</h3>
			<div style={{ marginLeft: "19px" }}>{isOpen ? children : null}</div>
		</div>
	);
};

const File = props => {
	const { name } = props;
	const fileExtension = name.split(".")[1];
	const fileIcons = {
		mp4: "headphones",
		jpg: "file image",
		png: "file image outline"
	};

	return (
		<div>
			<i className={`${fileIcons[fileExtension]} icon`}></i>
			{name}
		</div>
	);
};

export default App;
