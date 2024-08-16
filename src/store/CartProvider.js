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
			updatedItems = [...state.items, action.item];
		} else {
			updatedItems = state.items;
		}
		// console.log(updatedItems);
		updatedtotalAmount = state.totalAmount + action.item.price * action.item.qty;
		return {
			items: updatedItems,
			totalAmount: +updatedtotalAmount.toFixed(2),
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
		return {
			items: updatedItems,
			totalAmount: +updatedtotalAmount.toFixed(2),
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
		dispatchCartAction({ type: "REMOVE", id: id });
	};

	const cartCtx = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: remmoveItemHandler,
	};
	return <cartContext.Provider value={cartCtx}>{props.children}</cartContext.Provider>;
};

export default CartProvider;
