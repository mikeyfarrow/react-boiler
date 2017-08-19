"use strict";

import React from "react";
import ReactDOM from "react-dom";
import Animal from './components/Animal.js'
var cat = {
	species: "Cat",
	name: "Ruth",
	birthDate: "17 August 2017",
	images: [],
	color: "Diluted Torti"
};

const App = () => {
	return (
			<div>
				<Animal animal={cat} />
			</div>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));
