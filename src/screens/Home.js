import React, { useState, useContext, useEffect } from "react";
import mobile from "../assets/images/mobile.svg";
import "../assets/css/home.css";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/ProductContext";
import { GetItem } from "../actions/Action";
import { BiX } from "react-icons/bi";
import ReactPaginate from "react-js-pagination";

function Home() {
	const [input, setInput] = useState("");
	const [keyword, setKeyword] = useState("");
	const { dispatch, current_page, per_page, total } = useContext(ProductContext);

	const handleSearch = (e) => {
		e.preventDefault();
		setKeyword(input);
	};

	const clearInput = () => {
		setKeyword("");
		setInput("");
	};

	const getData = (page = 1) => {
		try {
			GetItem(dispatch, keyword, page);
		}catch(error){
			console.log(error);
		}
	};

	useEffect(() => {
		getData(1, keyword);
	}, [keyword]);

	return (
		<div className="container">
			<div className="flex_container main">
				<div className="main_wrapper">
					<span className="wrap_title">Shop at M-Shop</span>
					<div>
						<button className="btn primary_btn">Shop More</button>
					</div>
				</div>
				<div className="main_wrapper">
					<img src={mobile} alt="Iphone" className="title_image" />
				</div>
			</div>

			<div className="search_container">
				<div className="search">
					<input
						type="text"
						className="search_input"
						value={input}
						placeholder="Please search by phone model, eg: Iphone 13 pro"
						onChange={(e) => setInput(e.target.value)}
					/>
					<BiX
						className={`cross_icon ${
							input !== "" ? "show_icon" : ""
						}`}
						onClick={clearInput}
					/>
				</div>
				<button className="btn primary_btn" onClick={handleSearch}>
					Search
				</button>
			</div>

			<div className="card_container">
				<ProductCard />
			</div>
			<ReactPaginate
				activePage={parseInt(current_page)}
				totalItemsCount={total - 12}
				ItemsCountPerPage={per_page}
				pageRangeDisplayed={5}
				onChange={(page) => getData(page)}
				firstPageText="First"
				lastPageText="Last"
				activeClass="active"
				itemClass="pagination_item"
				className="pagination"
			/>
		</div>
	);
}

export default Home;
