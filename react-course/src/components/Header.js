import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
	// const onClick = () => {
	// 	console.log("click");

	// };
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button
				color={showAdd ? "red" : "blue"}
				text={showAdd ? "Close" : "Add"}
				onClick={onAdd}
			/>
			{/* <Button color="blue" text="Hello 2" />
			<Button color="red" text="Hello 2" /> */}
		</header>
	);
};

Header.defaultProps = {
	title: "Task Tracker"
};

Header.propTypes = {
	title: PropTypes.string.isRequired
};

const headingStyle = {
	color: "red",
	backgroundColor: "black"
};

export default Header;
