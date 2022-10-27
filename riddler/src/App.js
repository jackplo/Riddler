import React, { useEffect, useState } from "react";
import { ReactDOM } from "react-dom/client";
import update from "./update";
import Riddle from "./components/Riddle";

const words = ["hello its me", "yes", "no", "thanks", "no more"];

function App() {
	const [difference, setDifference] = useState(null);

	useEffect(() => {
		let i = update();
		setDifference(i);
	}, [setDifference]);

	return (
		<div className="App">
			<h1>Riddler</h1>
			{difference && <Riddle solution={words[difference]} />}
		</div>
	);
}

export default App