import React from "react";
import ReactDOM from "react-dom";
import classes from "./CartModal.module.css";
import Card from "./Card";

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalContent = (props) => {
	return <Card className={classes.modalContent}>{props.children}</Card>;
};

const modalPortalID = document.getElementById("overlay");

const CartModal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, modalPortalID)}

			{ReactDOM.createPortal(
				<ModalContent>{props.children}</ModalContent>,
				modalPortalID
			)}
		</>
	);
};

export default CartModal;
