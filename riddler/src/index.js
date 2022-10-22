import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import update from "./update";
import "./index.css";

const words = ["hello", "yes", "no", "thanks", "no more"];

function App(props) {
	const [difference, setDifference] = useState();

	useEffect(() => {
		let i = update();
		setDifference(i);
	}, [setDifference]);

	return <h1>{words[difference]}</h1>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// if answer in solution: *win*
