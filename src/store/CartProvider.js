import React, { useReducer } from "react";
import cartContext from "./cart-context";

const defaultCart = {
	items: [],
	totalAmount: 0,
};
const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const updatedItems = state.items.concat(action.item);
		const updatedtotalAmount = state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updatedItems,
			totalAmount: updatedtotalAmount,
		};
	}
	return defaultCart;
};

const CartProvider = (props) => {
	const [cardState, dispatchCartAction] = useReducer(cartReducer, defaultCart);

	const addItemHandler = (item) => {
		dispatchCartAction({ type: "ADD", item: item });
	};
	const remmoveItemHandler = (id) => {
		dispatchCartAction({ type: "REMOVE", id: id });
	};

	const cartctx = {
		items: cardState.items,
		totalAmount: cardState.totalAmount,
		addItem: addItemHandler,
		removeItem: remmoveItemHandler,
	};
	return <cartContext.Provider value={cartctx}>{props.children}</cartContext.Provider>;
};

export default CartProvider;
