import React, { useContext } from "react";
import "../assets/css/card.css";
import { ProductContext } from "../context/ProductContext";

const ProductCard = (props) => {
	const {products} = useContext(ProductContext);
	// console.log(products)
	return products.length !== 0 ? products.map((product) => {
		return (
			<div className="card" key={product.id}>
				<div className="card_image">
					<img src={product.image} alt="Item" className="card_img" />
				</div>
				<div className="card_title">
					<span>{product.p_name}</span>
					<span>{product.price} MMK</span>
				</div>
				<div className="card_btn_group">
					<button className="btn primary_btn">Add To Cart</button>
					<button className="btn secondary_btn">Detail</button>
				</div>
				<span className="order_flg">
					{product.stock === 1 ? "Instock" : "PreOrder"}
				</span>
			</div>
		);
	}) : <div>No data!</div>

	// return (
	// 	<div></div>
	// )
	
};

export default ProductCard;
