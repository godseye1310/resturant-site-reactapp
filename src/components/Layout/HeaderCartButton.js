import React from "react";
import classes from "./HeaderCartButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const HeaderCartButton = () => {
	return (
		<>
			<button className={classes.button}>
				<span className={classes.icon}>
					<FontAwesomeIcon icon={faCartShopping} />
				</span>
				<span>Your Cart</span>
				<span className={classes.badge}>9</span>
			</button>
		</>
	);
};

export default HeaderCartButton;
