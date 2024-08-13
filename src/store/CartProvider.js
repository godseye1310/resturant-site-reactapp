import React, { useReducer } from "react";
import cartContext from "./cart-context";

const defaultCart = {
	items: [],
	totalAmount: 0,
};
const cartReducer = (state, action) => {
	let updatedItems;
	let updatedtotalAmount;
	if (action.type === "ADD") {
		let flag = true;
		for (let item of state.items) {
			if (item.id === action.item.id) {
				flag = false;
				item.qty += action.item.qty;
			}
		}
		if (flag) {
			updatedItems = state.items.concat(action.item);
		} else {
			updatedItems = state.items;
		}
		// console.log(updatedItems);
		updatedtotalAmount =
			Number(state.totalAmount) + Number(action.item.price) * Number(action.item.qty);
		return {
			items: updatedItems,
			totalAmount: updatedtotalAmount.toFixed(2),
		};
	}

	if (action.type === "REMOVE") {
		for (let item of state.items) {
			if (item.id === action.id && item.qty === 1) {
				updatedItems = state.items.filter((item) => item.id !== action.id);
				updatedtotalAmount = state.totalAmount - item.price;
			} else if (item.id === action.id) {
				item.qty -= 1;
				updatedtotalAmount = state.totalAmount - item.price;
				updatedItems = state.items;
			}
		}
		// console.log(state.items);
		// console.log(state.totalAmount);

		return {
			items: updatedItems,
			totalAmount: updatedtotalAmount.toFixed(2),
		};
	}
	return defaultCart;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);

	const addItemHandler = (item) => {
		// console.log(item);
		dispatchCartAction({ type: "ADD", item: item });
	};
	const remmoveItemHandler = (id) => {
		// console.log(id);

		dispatchCartAction({ type: "REMOVE", id: id });
	};

	const cartctx = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: remmoveItemHandler,
	};
	return <cartContext.Provider value={cartctx}>{props.children}</cartContext.Provider>;
};

export default CartProvider;
