import React, { useContext } from "react";
import "../assets/css/card.css";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
	const { products } = useContext(ProductContext);
	return products.length !== 0 ? (
		products.map((product) => {
			return (
				<div className="card" key={product.id}>
					<div className="card_image">
						<img
							src={product.image}
							alt="Item"
							className="card_img"
						/>
					</div>
					<div className="card_title">
						<span>{product.p_name}</span>
						<span>{product.price} MMK</span>
					</div>
					<div className="card_btn_group">
						<button className="btn primary_btn">Add To Cart</button>
						<Link
							to={`detail/${product.id}`}
							className="btn secondary_btn"
						>
							Detail
						</Link>
					</div>
					<span className="order_flg">
						{product.stock === 1 ? "Instock" : "PreOrder"}
					</span>
				</div>
			);
		})
	) : (
		<div className="title">There is no data!.</div>
	);
};

export default ProductCard;
