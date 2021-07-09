import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd }) => {
	return (
		<header class="header">
			<h1>{title}</h1>
			<Button color="green" text="add" onClick={onAdd} />
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
