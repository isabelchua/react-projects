const Button = ({ color, text, onClick }) => {
	// const onClick = e => {
	// 	console.log(e);
	// };
	return (
		<button
			onClick={onClick}
			style={{ backgroundColor: color }}
			className="btn"
		>
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: "green"
};

export default Button;
