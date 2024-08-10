import React from "react";
import classes from "./Header.module.css";
import mealsImg from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={classes.mainImage}>
				<img src={mealsImg} alt="A table full with tasty food" />
			</div>
		</>
	);
};

export default Header;
