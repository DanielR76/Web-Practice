import React from "react";

const Search = ({ search, refSearch, handleSearch }) => {
	return (
		<div>
			<input
				type="text"
				value={search}
				ref={refSearch}
				onChange={handleSearch}
			/>
		</div>
	);
};

export default React.memo(Search);
