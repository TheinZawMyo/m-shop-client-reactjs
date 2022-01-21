import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { AddToCartContext } from "../context/AddToCartContext";

function Cart() {
	const { cart } = useContext(AddToCartContext);

	const total_price = cart.reduce((total, value) => total + value.subtotal, 0);

	return cart.length !== 0 ? (
		<div className="container cart_container">
			<div className="cart">
				{cart.map((cart) => {
					return <CartItem key={cart.cart_id} data={cart} />;
				})}
			</div>
			<div>
				<div className="checkout card">
					<div>Total : {total_price} MMK</div>
					<div>Discount : 0 MMK</div>
					<button className="btn primary_btn">Check Out</button>
				</div>
			</div>
		</div>
	) : (
		<div className="container empty">Your cart is empty.</div>
	);
}

export default Cart;
