import React from "react";
import ReactDOM from "react-dom";
import { ThemeContextProvider } from "./context/ThemeContext";

import "./assest/css/index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
