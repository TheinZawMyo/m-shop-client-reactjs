import React, {useState, useEffect} from "react";
import mobile from "../assets/images/mobile.svg";
import "../assets/css/home.css";
import Service from "../Services/Service";
import ProductCard from "../components/ProductCard";

function Home() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		Service.getAllItem()
				.then((res) => {
					console.log(res.data.products.data);
					let all_products = res.data.products.data;
					setProducts(all_products);
				})
				.catch((err) => { console.log(err)});

	}, []);
	return (
		<div className="container">
			<div className="flex_container main">
				<div className="main_wrapper">
                    <span className="wrap_title">Shop on M-Shop</span>
                    <div><button className="btn primary_btn">Shop More</button></div>
                </div>
				<div className="main_wrapper">
					<img src={mobile} alt="Iphone" className="title_image" />
				</div>
			</div>

			<div className="search_container">
				<input type="text" className="search_input" placeholder="Enter your search keyword"/>
			</div>
			
			<div className="card_container">
				{
					products.map((product) => {
						return (
							<ProductCard data={product} key={product.id}/>
						)
					})
				}
			</div>
		</div>
	);
}

export default Home;
