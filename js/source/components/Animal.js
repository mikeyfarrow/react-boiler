"use strict";

import React from "react";
import ReactDOM from "react-dom";

const Animal = (props) => {
	return (
		<div className="animalCard">
			<h1>{props.animal.species}</h1>
			<h2>{props.animal.name}</h2>
			<p>{props.animal.birthDate}</p>
			<div>
				{props.animal.images.map((url, idx) => (<img src={url} alt="kitty" key={idx}/>))}
			</div>
		</div>
	);
};

export default Animal;