import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
	const [cartDisplay, setCartDisplay] = useState(false);
	const cartDisplayHandler = () => {
		setCartDisplay(true);
	};
	const cartDisplayCloser = () => {
		setCartDisplay(false);
	};
	return (
		<div>
			<Header onShowCart={cartDisplayHandler} />

			{cartDisplay && <Cart onCloseCart={cartDisplayCloser} />}

			<Meals />
		</div>
	);
}

export default App;
