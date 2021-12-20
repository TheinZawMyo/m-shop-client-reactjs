import React from "react";
import "../assets/css/card.css";

const ProductCard = (props) => {
	const { image, p_name, stock, price } = props.data;
	return (
		<div className="card">
			<div className="card_image">
				<img src={image} alt="Item" className="card_img" />
			</div>
			<div className="card_title">
				<span>{p_name}</span>
				<span>{price} MMK</span>
			</div>
			<div className="card_btn_group">
				<button className="btn primary_btn">Add To Cart</button>
				<button className="btn secondary_btn">Detail</button>
			</div>
			<span className="order_flg">
				{stock === 1 ? "Instock" : "PreOrder"}
			</span>
		</div>
	);
};

export default ProductCard;
