import React from "react";
import {
	useState,
	useEffect,
	useReducer,
	useRef,
	useMemo,
	useCallback,
} from "react";
import Search from "./Search";

import classNames from "classnames";
import "../assest/css/characters.css";

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
	const [search, setSearch] = useState("");
	const darkClass = classNames({ dark: darkMode });
	const refSearch = useRef(null);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => response.json())
			.then((data) => setCharacters(data.results));
	}, []);

	const handleClick = (fav) => {
		dispatch({ type: "ADD_FAVORITE", payload: fav });
	};

	const handleSearch = useCallback(() => {
		setSearch(refSearch.current.value);
	}, [refSearch]);

	const filteredUsers = useMemo(() => {
		return characters.filter((element) =>
			element.name.toLowerCase().includes(search?.toLowerCase())
		);
	}, [characters, search]);

	return (
		<div className="card__content">
			<ul className="card__list--favorite">
				{favorites.favorites.map((element, index) => (
					<li key={index}>{element.name}</li>
				))}
			</ul>
			<Search
				search={search}
				refSearch={refSearch}
				handleSearch={handleSearch}
			/>
			<span>
				{filteredUsers?.map((element, index) => (
					<span
						className={`card__unique ${darkClass}`}
						key={index}
						type="button"
						onClick={() => handleClick(element)}
					>
						{element.name}
					</span>
				))}
			</span>
		</div>
	);
};

export default Characters;
