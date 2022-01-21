import React, { useContext } from "react";
import "../assets/css/card.css";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = (props) => {
	const { products } = useContext(ProductContext);
	return products.length !== 0 ? (
		products.map((product) => {
			return (
				<div className="card list_card" key={product.id}>
					<Link to={`detail/${product.id}`}>
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
						{/* <div className="card_btn_group">
						<button className="btn primary_btn">Add To Cart</button>
						<Link
							to={`detail/${product.id}`}
							className="btn secondary_btn"
						>
							Detail
						</Link>
					</div> */}
						<span className="order_flg">
							{product.stock === 1 ? "Instock" : "PreOrder"}
						</span>
						<div className="rate_container">
							<AiFillStar />
							<AiFillStar />
							<AiOutlineStar />
							<AiOutlineStar />
							<AiOutlineStar />
						</div>
					</Link>
				</div>
			);
		})
	) : (
		<div className="title">There is no data!.</div>
	);
};

export default ProductCard;
