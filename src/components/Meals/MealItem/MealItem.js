import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
	return (
		<>
			<li className={classes.list} key={props.id}>
				<div>
					<h3>{props.name}</h3>
					<p className={classes.description}>{props.description}</p>
					<p className={classes.price}>${props.price}</p>
				</div>
				<div>
					<MealItemForm name={props.name} price={props.price} id={props.id} />
				</div>
			</li>
			<hr className={classes.hr} />
		</>
	);
};

export default MealItem;
