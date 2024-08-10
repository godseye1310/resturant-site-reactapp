import React from "react";
import Header from "./components/Layout/Header";
// import MealsModal from "./components/Meals/MealsModal";
import Meals from "./components/Meals/Meals";
import CartModal from "./components/UI/CartModal";
import Cart from "./components/Cart/Cart";

function App() {
	return (
		<div>
			<Header />
			<Cart />
			<Meals />
		</div>
	);
}

export default App;
