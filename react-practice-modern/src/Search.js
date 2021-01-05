import React from "react";

const Search = ({ onSearch }) => {
	return (
		<div>
			<label htmlFor="">Search: </label>
			<input
				id="searchInput"
				type="text"
				onChange={onSearch}
				//onKeyPress={handleKeyPress}
			/>
		</div>
	);
};

export default Search;
