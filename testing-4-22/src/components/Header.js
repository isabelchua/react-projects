import Search from "./Search";

const Header = ({ handleSearchText }) => {
	return (
		<>
			Plushisaur
			<Search handleSearchText={handleSearchText} />
		</>
	);
};

export default Header;
