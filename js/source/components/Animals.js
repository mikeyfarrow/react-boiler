"use strict";

import React from "react";
import ReactDOM from "react-dom";
import Animal from "./Animal.js";

const Animals = props => {
	return (
		<div className="animals">
			{props.animals.map((animal, idx) => <Animal animal={animal} key={idx} />)}
		</div>
	);
};

export default Animals;
