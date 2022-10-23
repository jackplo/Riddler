import React, { useEffect, useState } from "react";
import update from "./update";
import Riddle from "./components/Riddle";

const words = ["hello its me", "yes", "no", "thanks", "no more"];

function App(props) {
	const [difference, setDifference] = useState();

	useEffect(() => {
		let i = update();
		setDifference(i);
	}, [setDifference]);

	return (
		<div className="App">
			<h1>Riddler</h1>
			<Riddle solution={words[difference]}/>
		</div>
	);
}

export default App