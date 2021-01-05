import React from "react";

const Search = ({ value, onSearch }) => {
	return (
		<div>
			<label htmlFor="">Search: </label>
			<input
				id="searchInput"
				type="text"
				onChange={onSearch}
				value={value}
				//onKeyPress={handleKeyPress}
			/>
		</div>
	);
};

export default Search;
