import PropTypes from "prop-types";

const Header = ({ title }) => {
	return (
		<header class="header">
			<h1>{title}</h1>
			<button className="btn">Add</button>
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
