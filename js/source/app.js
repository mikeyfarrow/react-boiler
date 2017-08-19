"use strict";

import React from "react";
import ReactDOM from "react-dom";

// Needed for onTouchTap
injectTapEventPlugin();

const App = () => {
	return (
			<div>
				Hello
			</div>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));
