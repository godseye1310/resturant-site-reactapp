import React, { useContext, useState } from "react";
import classes from "./MealItemForm.module.css";
import cartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
	const defaultNum = 1;
	const [itemNum, setItemNum] = useState(defaultNum);

	const addMealHandler = (event) => {
		setItemNum(event.target.value);
		// console.log(event.target.value);
	};

	const addItemCtx = useContext(cartContext);
	const submitHandler = (event) => {
		event.preventDefault();
		const myMeal = {
			id: props.id,
			name: props.name,
			price: +props.price,
			qty: +itemNum,
		};
		addItemCtx.addItem(myMeal);
		// console.log(myMeal);
	};
	return (
		<>
			<form className={classes.form} onSubmit={submitHandler}>
				<label htmlFor="addMeal">Amount </label>
				<input id="addMeal" type="number" onChange={addMealHandler} value={itemNum} />
				<div>
					<button type="submit">+ Add</button>
				</div>
			</form>
		</>
	);
};

export default MealItemForm;
