import React from "react";
import { useState, useEffect } from "react";
import classNames from "classnames";
import "../assest/css/characters.css";

const Characters = ({ darkMode }) => {
	const [characters, setCharacters] = useState([]);
	const darkClass = classNames({ dark: darkMode });
	
	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => response.json())
			.then((data) => setCharacters(data.results));
	}, []);

	return (
		<div className="card__content">
			{characters?.map((element, index) => (
				<h2 className={`card__unique ${darkClass}`} key={index}>
					{element.name}
				</h2>
			))}
		</div>
	);
};

export default Characters;
