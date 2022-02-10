import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/card.css";
import { AddToCartContext } from "../context/AddToCartContext";
import Service from "../Services/Service";
import { useAlert } from "react-alert";
import { ThreeDots } from "react-loader-spinner";

const Detail = () => {
	let { id } = useParams();
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const alert = useAlert();
	const [count, setCount] = useState(0);
	const [subtotal, setSubtotal] = useState(0);
	const { cartDispatch } = useContext(AddToCartContext);

	useEffect(() => {
		id !== "" &&
			Service.getDetail(id)
				.then((res) => {
					// console.log(product);
					setLoading(false);
					setProduct(res.data.product);
				})
				.catch((err) => {
					console.log(err);
				});
	}, [id]);

	const addCart = () => {
		if (count !== 0) {
			cartDispatch({
				type: "ADDTOCART",
				payload: { product, count, subtotal },
			});
			alert.show("The product has been placed successfully to the cart.");
			// console.log(product);
		} else {
			alert.show("Please choose your order quantity.");
		}
	};

	useEffect(() => {
		const calSubtotal = () => {
			let val = count * product.price;
			// console.log(count);
			setSubtotal(val);
		};
		calSubtotal();
	});

	return (
		<div>
			{loading ? (
				<div className="threeDots container">
					<ThreeDots color="#f6b60d" height={80} width={80} />
				</div>
			) : (
				<div className="container">
					<div className="card detail_card">
						<h3 className="title">Product Detail</h3>
						<div className="detail_container">
							<div className="detail_img">
								<img
									src={product.image}
									alt="img"
									className="img"
								/>
							</div>
							<div className="detail">
								<div>Brand Name: {product.brand}</div>
								<div>Model Name: {product.p_name}</div>
								<div>Price: {product.price} MMK</div>
								<div>Available Color: Red, Silver</div>
								<div>
									<span className="stock_flg">
										{product.stock === 1
											? "Instock"
											: "PreOrder"}
									</span>
								</div>
								<div className="counter">
									Quantity : <br />
									<span
										className="minus"
										onClick={() =>
											count !== 0 && setCount(count - 1)
										}
									>
										-
									</span>
									<input
										type="number"
										min="0"
										value={count.toString()}
										className="item_count"
										placeholder="0"
										disabled
										onChange={(e) =>
											setCount(e.target.value)
										}
									/>
									<span
										className="plus"
										onClick={() =>
											count <= product.qty &&
											setCount(count + 1)
										}
									>
										+
									</span>
								</div>
								<div className="left_item">
									{" "}
									Only {product.qty} item(s) in stock
								</div>
								<div className="detail_btn">
									<button
										className="btn primary_btn add_to_cart"
										onClick={addCart}
									>
										Add To Cart
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="card specs">
						<h4 className="title">Product Specifications</h4>
						{product.specs}
					</div>
				</div>
			)}
		</div>
	);
};

export default Detail;
