import React from "react";
import classes from "./MealsModal.module.css";
import Card from "../UI/Card";

const MealsModal = () => {
	return (
		<Card className={classes.mealDesc}>
			<header>
				<h1>Delicious Food, Delivered to You</h1>
			</header>
			<div>
				<p>
					Choose your favourite meal from our broada selection available meals and enjoy
					delicious lunch or dinner at home.
				</p>
				<p>
					All our meals are cookedd with high-quality ingredients, just-in-time and of
					course by experienced chefs!
				</p>
			</div>
		</Card>
	);
};

export default MealsModal;
