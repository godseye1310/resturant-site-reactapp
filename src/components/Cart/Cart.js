import React, { useContext } from "react";
import classes from "./Cart.module.css";
import CartModal from "../UI/CartModal";
import cartContext from "../../store/cart-context";
import CartItems from "./CartItems";

const Cart = (props) => {
	const cartListCtx = useContext(cartContext);

	const itemRemover = (id) => {
		cartListCtx.removeItem(id);
	};

	//parameter item
	const itemAdder = (myitem) => {
		let addItem = { ...myitem };
		addItem.qty = 1;
		cartListCtx.addItem(addItem);
	};

	// const a =(x)=>{}
	// const b = a.bind(5)
	// b() --> a(5)

	return (
		<CartModal onClose={props.onCloseCart}>
			<ul className={classes.cartList}>
				{cartListCtx.items.map((item) => {
					return (
						<CartItems
							key={item.id}
							id={item.id}
							name={item.name}
							price={item.price}
							qty={item.qty}
							onMinus={itemRemover}
							onAdder={itemAdder.bind(null, item)}
						/>
					);
				})}
			</ul>
			<div className={classes.cartTotal}>
				<h2>Total Amount</h2>
				<h2>{cartListCtx.totalAmount}</h2>
			</div>
			<div className={classes.btn}>
				<button
					className={classes["btn-close"]}
					type="button"
					onClick={props.onCloseCart}
				>
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
