import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
	return (
		<header class="header">
			<h1>{title}</h1>
			<Button color="green" text="hello" />
			<Button color="blue" text="hello 1" />
			<Button color="red" text="hello 2" />
		</header>
	);
};

Header.defaultProps = {
	title: "Task Tracker"
};

// const headingStyle = {
// 	color: 'red',
// 	backgroundColor: 'black'
// }

Header.propTypes = {
	title: PropTypes.string
};
export default Header;
