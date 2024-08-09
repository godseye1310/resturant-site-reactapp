import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartIcon = () => {
	return <FontAwesomeIcon icon={faCartShopping} />;
};

export default CartIcon;

// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faEnvelope} />
