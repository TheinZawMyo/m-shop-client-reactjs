import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "../assets/css/card.css";
import Service from "../Services/Service";

const Detail = () => {
	let { id } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		id !== '' && Service.getDetail(id).then((res) => {
			// console.log(product);
			setProduct(res.data.product)
		}).catch((err) => {
			console.log(err);
		})
	}, [id]);

	return (
		<div className="container">
			<div className="card detail_card">
				<h3 className="title">Item Detail</h3>
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
						<div>Available Color: Red, Silver</div>
						<div>
							{product.specs}
						</div>
						<div className="detail_btn">
							<button className="btn primary_btn add_to_cart">
								Add To Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
