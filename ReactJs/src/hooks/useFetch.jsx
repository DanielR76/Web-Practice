import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [characters, setCharacters] = useState([]);
	console.log(url);
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setCharacters(data.results))
			.catch((e) => console.log(e));
	}, [url]);

	return characters;
};

export default useFetch;
