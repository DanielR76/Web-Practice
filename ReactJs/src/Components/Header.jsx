import React, { useState, useContext } from "react";
import Characters from "./Characters";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const [darkMode, setDarkMode] = useState(true);
	const handleTheme = () => {
		setDarkMode(!darkMode);
		setTheme(!theme);
	};
	return (
		<div>
			<button type="button" onClick={handleTheme}>{`Is ${
				darkMode ? "Dark" : "Light"
			}`}</button>
			<Characters darkMode={darkMode} />
		</div>
	);
};

export default Header;
