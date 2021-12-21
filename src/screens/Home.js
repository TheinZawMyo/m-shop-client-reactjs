import React, { useState, useContext } from "react";
import mobile from "../assets/images/mobile.svg";
import "../assets/css/home.css";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/ProductContext";

function Home() {
	const [search, setSearch] = useState("");
	const { liveSearch } = useContext(ProductContext);

	const handleSearch = (e) => {
		e.preventDefault();
		liveSearch(search);
	}

	search === '' && liveSearch('');

	// const {dispatch} = useContext(ProductContext);
	// dispatch({type: 'ADD_TO_CART', id});
	return (
		<div className="container">
			<div className="flex_container main">
				<div className="main_wrapper">
					<span className="wrap_title">Shop on M-Shop</span>
					<div>
						<button className="btn primary_btn">Shop More</button>
					</div>
				</div>
				<div className="main_wrapper">
					<img src={mobile} alt="Iphone" className="title_image" />
				</div>
			</div>

			<div className="search_container">
				<input
					type="search"
					className="search_input"
					placeholder="Please search using phone model, eg: Iphone 13 pro"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button className="btn primary_btn" onClick={handleSearch}>Search</button>
			</div>

			<div className="card_container">
				<ProductCard />
			</div>
		</div>
	);
}

export default Home;
