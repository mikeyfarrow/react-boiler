"use strict";

import React from "react";
import ReactDOM from "react-dom";
import Animals from "./components/Animals.js";

var animals = [
	{
		species: "Cat",
		name: "Ruth",
		birthDate: Date.now(),
		images: [
			"http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg"
		],
		color: "Diluted Torti"
	},

	{
		species: "Cat",
		name: "Einstein",
		birthDate: Date.now(),
		images: [
			"https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg"
		],
		color: "Orange"
	},

	{
		species: "Dog",
		name: "Freddie",
		birthDate: Date.now(),
		images: [
			"https://static.pexels.com/photos/7720/night-animal-dog-pet.jpg"
		],
		color: "Black/White"
	}
];

const App = () => {
	return (
		<div>
			<h1>Humane Society React App</h1>
			<h2>Animals for Adoption</h2>
			<hr />
			<Animals animals={animals} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));
