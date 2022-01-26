import React from "react";
import { useState, useEffect } from "react";
import classNames from "classnames";
import "../assest/css/characters.css";
import { useReducer } from "react";

const initialState = {
	favorites: [],
};

const favoriteReducer = (state, action) => {
	switch (action.type) {
		case "ADD_FAVORITE":
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
		default:
			return state;
	}
};

const Characters = ({ darkMode }) => {
	const [characters, setCharacters] = useState([]);
	const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

	const darkClass = classNames({ dark: darkMode });

	const handleClick = (fav) => {
		dispatch({ type: "ADD_FAVORITE", payload: fav });
	};

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => response.json())
			.then((data) => setCharacters(data.results));
	}, []);

	return (
		<div className="card__content">
			<ul>
				{favorites.favorites.map((element, index) => (
					<li key={index}>{element.name}</li>
				))}
			</ul>

			{characters?.map((element, index) => (
				<span
					className={`card__unique ${darkClass}`}
					key={index}
					type="button"
					onClick={() => handleClick(element)}
				>
					{element.name}
				</span>
			))}
		</div>
	);
};

export default Characters;
