import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
	const location = useLocation();
	return (
		<header class="header">
			<h1>{title}</h1>
			{location.pathname === "/" && (
				<Button
					color={showAdd ? "red" : "green"}
					text={showAdd ? "Close" : "Add"}
					onClick={onAdd}
				/>
			)}
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
