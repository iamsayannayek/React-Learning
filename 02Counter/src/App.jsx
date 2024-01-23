import { useState } from "react";

import "./App.css";

function App() {
	let [counter, setCounter] = useState(15);
	const addValue = () => {
		if (counter >= 20) {
			alert("You Can't Add value after 20");
		} else {
			setCounter(counter + 1);
		}
	};

	const removeValue = () => {
		if (counter <= 0) {
			alert("You Can't Remove value after 0");
		} else {
			setCounter(counter - 1);
		}
	};

	return (
		<>
			<h2>Basic Project On useState Hook</h2>
			<h1>Counter Value</h1>
			<h1>{counter}</h1>
			<br />

			<button onClick={addValue}>Add Value</button>
			<br />
			<br />
			<button onClick={removeValue}>Remove Value</button>
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
