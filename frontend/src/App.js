import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./Card Component/main";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Create from "./Pages/Create";
import Update from "./Pages/Update";

function App() {
	return (
		<React.Fragment>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/shop' component={Main} />
				<Route exact path='/create' component={Create} />
				<Route exact path='/update/:slug' component={Update} />
				<Route component={Error} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
