import React from "react";
import classes from "./Cart.module.css";
import CartModal from "../UI/CartModal";

const Cart = () => {
	return (
		<CartModal>
			<ul className={classes.cartList}>
				<li>Sushi</li>
			</ul>
			<div className={classes.cartTotal}>
				<h2>Total Amount</h2>
				<h2>35.62</h2>
			</div>
			<div className={classes.btn}>
				<button className={classes["btn-close"]} type="button">
					Close
				</button>
				<button className={classes["btn-order"]} type="button">
					Order
				</button>
			</div>
		</CartModal>
	);
};

export default Cart;
