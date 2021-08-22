import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home";
import AppNavbar from "./Components/AppNavbar";

function App() {
	return (
		<React.Fragment>
			<AppNavbar />
			<Home />
		</React.Fragment>
	);
}

export default App;
