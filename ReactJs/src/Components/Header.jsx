import React, { useState } from "react";
import Characters from "./Characters";
const Header = () => {
	const [darkMode, setDarkMode] = useState(true);
	const handleTheme = () => setDarkMode(!darkMode);
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
