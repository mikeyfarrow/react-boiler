"use strict";

import React from "react";
import ReactDOM from "react-dom";

var animals = [
	{
		species: "Cat",
		name: "Ruth",
		birthDate: Date.now(),
		images: [],
		color: "Diluted Torti"
	}
];

const App = () => {
	return (
			<div>
				Hello
			</div>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));
