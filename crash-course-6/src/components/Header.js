import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
	const onClick = () => {
		console.log("click");
	};
	return (
		<header class="header">
			<h1>{title}</h1>
			<Button color="green" text="add" onClick={onClick} />
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
