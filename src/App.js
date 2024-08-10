import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
	const [cartDisplay, setCartDisplay] = useState(false);
	const cartDisplayHandler = () => {
		setCartDisplay(true);
	};
	const cartDisplayCloser = () => {
		setCartDisplay(false);
	};
	return (
		<CartProvider>
			<Header onShowCart={cartDisplayHandler} />

			{cartDisplay && <Cart onCloseCart={cartDisplayCloser} />}

			<Meals />
		</CartProvider>
	);
}

export default App;
