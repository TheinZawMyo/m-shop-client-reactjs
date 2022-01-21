import React, {useContext} from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {AddToCartContext} from '../context/AddToCartContext';

const CartItem = (props) => {
	// console.log(props);
	const { cart_id, name, image, price, order, brand, subtotal } = props.data;
	const {cartDispatch} = useContext(AddToCartContext);

	return (
		<div className="card cart_card">
			<div className="cart_wrapper">
				<img src={image} alt="CartImage" className="cart_img" />
			</div>
			<div className="cart_wrapper">
				<div>
					{" "}
					{brand} | {name}
				</div>
				<div>Price: {price} MMK</div>
				<div>Quantity: {order} </div>
				<div>Total: {subtotal} MMK</div>
				<div>
					<span className="icon_container">
						<RiDeleteBin6Line  className="delete_icon" onClick={() => cartDispatch({type: "REMOVE_CART", id: cart_id})}/>
					</span>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
