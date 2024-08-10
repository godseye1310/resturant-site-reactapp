import React from "react";
import ReactDOM from "react-dom";
import classes from "./CartModal.module.css";
import Card from "./Card";

const Backdrop = (props) => {
	return <div className={classes.backdrop} />;
};

const ModalContent = (props) => {
	return (
		<Card className={classes.modalContent}>
			<div>{props.children}</div>
		</Card>
	);
};

const modalPortalID = document.getElementById("overlay");

const CartModal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, modalPortalID)}

			{ReactDOM.createPortal(
				<ModalContent>{props.children}</ModalContent>,
				modalPortalID
			)}
		</>
	);
};

export default CartModal;
