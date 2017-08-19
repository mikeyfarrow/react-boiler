"use strict";

import React from "react";
import ReactDOM from "react-dom";

const Animal = (props) => {
	return (
		<div>
			<h1>{props.animal.species}</h1>
			<h2>{props.animal.name}</h2>
			<p>{props.animal.birthDate}</p>
			<div>
				{props.animal.images.map(url => (<img src={url} alt="kitty"/>))}
			</div>
		</div>
	);
};

export default Animal;