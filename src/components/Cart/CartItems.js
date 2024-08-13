import React from "react";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
	const itemMinusHandler = (event) => {
		event.preventDefault();
		props.onMinus(props.id);
	};

	const itemAddHandler = () => {
		props.onAdder();
	};

	return (
		<li>
			<div>
				<h5>Meal: {props.name}</h5>
				<h5>
					${props.price} <span className={classes.qty}>{props.qty}</span>
				</h5>
			</div>
			<div className={classes.actionBtn}>
				<button onClick={itemMinusHandler}>-</button>
				<button onClick={itemAddHandler}>+</button>
			</div>
		</li>
	);
};

export default CartItems;
