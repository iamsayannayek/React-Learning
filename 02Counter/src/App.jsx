import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [counter, setCounter] = useState(15);

	const addValue = () => {
		if (counter >= 20) {
			alert("You Don't clicked beyond 20");
		} else {
			setCounter(counter + 1);
		}
	};

	const removeValue = () => {
		if (counter <= 1) {
			alert("You Don't clicked less than 1");
		} else {
			setCounter(counter - 1);
		}
	};
	return (
		<>
			<h1>Chai Aur React</h1>
			<h2>Counter value: {counter}</h2>

			<button onClick={addValue}>Add Value</button>
			<br />
			<br />
			<button onClick={removeValue}>Remove Value</button>
			<br />
			<footer>Counter: {counter}</footer>
		</>
	);
}

export default App;

/*  
& Notes: 
! In JavaScript if we clicked a button then for clicked the button 
! everywhere changed by one click then we have to do many code means 
! first select the element then update the element's innerHTML according to 
! the button click, Then here the React comes a very useful.

* The basic thing is that by One Button Click if we change more than one state
* Then React give us some method that changes the state according to the Button
* Clicked, that's methods are called hooks. That is the Main Power of the React.
*/
