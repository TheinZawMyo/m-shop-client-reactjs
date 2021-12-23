import React from "react";
import { useParams } from "react-router-dom";
import "../assets/css/card.css";

const Detail = () => {
	let { id } = useParams();
	return (
		<div className="container">
			<div className="card detail_card">
				<h3 className="title">Item Detail</h3>
				<div className="detail_container">
					<div className="detail_img">
						<img
							src={require("../assets/images/iphone13.jpg")}
							alt="img"
							className="img"
						/>
					</div>
					<div className="detail">
						<div>Brand Name: Apple</div>
						<div>Model Name: Iphone 13 pro</div>
						<div>Available Color: Red, Silver</div>
						<div>
							Specifications: Fast charging (23W, unofficial
							rating), 50% in 30 min (advertised) USB Power
							Delivery 2.0 MagSafe wireless charging 15W Qi
							magnetic fast wireless charging 7.5W
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
