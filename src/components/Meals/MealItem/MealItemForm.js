import React from "react";
import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
	return (
		<>
			<form className={classes.form}>
				<label htmlFor="addMeal">Amount </label>
				<input id="addMeal" type="number" value="1"></input>
				<div>
					<button type="button">+ Add</button>
				</div>
			</form>
		</>
	);
};

export default MealItemForm;
