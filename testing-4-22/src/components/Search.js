const Search = ({ handleSearchText }) => {
	return (
		<div className="search">
			<input onChange={e => handleSearchText(e.target.value)} type="text" />
		</div>
	);
};

export default Search;
