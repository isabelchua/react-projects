import React from "react";
import { MdSearch } from "react-icons/md";

const Search = () => {
	return (
		<div className="serach">
			<MdSearch className="search-icons" size="1.3em" />
			<input type="text" placeholder="type to search.." />
		</div>
	);
};

export default Search;
