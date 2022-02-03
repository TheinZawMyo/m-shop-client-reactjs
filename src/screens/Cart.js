import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import { AddToCartContext } from "../context/AddToCartContext";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import Service from "../Services/Service";
import { useAlert } from "react-alert";

function Cart() {
	const { cart, cartDispatch } = useContext(AddToCartContext);
	const { user } = useContext(AuthContext);
	const [checkout, setCheckout] = useState(false);
	let alert = useAlert();
	let history = useHistory();

	let isCompleted = localStorage.getItem("info-completed");
	// console.log(isCompleted);

	const total_price = cart.reduce(
		(total, value) => total + value.subtotal,
		0
	);

	const checkOutOrder = (e) => {
		e.preventDefault();
		isCompleted === "true" ? setCheckout(true) : history.push("/user");
	};

	const arr = [];

	const confirmOrder = (e) => {
		e.preventDefault();
		cart.forEach((c) => {
			arr.push({
				user_id: user.id,
				p_id: c.id,
				qty: c.order,
				total: c.subtotal,
			});
		});
		Service.placeOrder(arr)
			.then((res) => {
				// console.log(res);
				if (res.data.status === 1) {
					alert.show("Your order has been placed successfully");
					// localStorage.removeItem("m-shop-cart");
					cartDispatch({type: "CLEAR_CART"});
				}
			})
			// .then((res) => window.location.reload())
			.catch((err) => console.log(err));
	};

	// console.log(user.id);

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
					<button className="btn primary_btn" onClick={checkOutOrder}>
						Check Out
					</button>
				</div>
				<div
					className={`card confirm_info ${
						checkout ? "show_confirm" : ""
					}`}
				>
					<div>Your Phone: {user?.phone}</div>
					<div>Your Address: {user?.address}</div>
					<button className="btn primary_btn" onClick={confirmOrder}>
						Confirm
					</button>
					<button
						className="btn secondary_btn"
						onClick={() => history.push("/user")}
					>
						Edit Info
					</button>
				</div>
			</div>
		</div>
	) : (
		<div className="container empty">Your cart is empty.</div>
	);
}

export default Cart;
