import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
	const cartCtx = useContext(cartContext);
	const totalCartItems = cartCtx.items.reduce((curNumber, items) => {
		return curNumber + items.qty;
	}, 0);
	return (
		<>
			<button className={classes.button} onClick={props.onClick}>
				<span className={classes.icon}>
					<CartIcon />
				</span>
				<span>Your Cart</span>
				<span className={classes.badge}>{totalCartItems}</span>
			</button>
		</>
	);
};

export default HeaderCartButton;
