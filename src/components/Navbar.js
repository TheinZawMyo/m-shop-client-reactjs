import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "../assets/css/navbar.css";
import { BiMenu, BiCartAlt, BiUser } from "react-icons/bi";
import { AuthContext } from "../context/AuthContext";
import { AddToCartContext } from "../context/AddToCartContext";

function Navbar() {
	const [click, setClick] = useState(false);
	const { authDispatch, user } = useContext(AuthContext);
	const { cart } = useContext(AddToCartContext);
	let history = useHistory();

	const logout = () => {
		authDispatch({ type: "LOGOUT" });
		localStorage.removeItem("m-shop-user");
		localStorage.removeItem("m-shop-token");
		localStorage.removeItem("info-completed");
		history.push("/user");
	};
	return (
		<div>
			<header>
				<nav className="nav_bar">
					<div className="nav_logo">
						<Link to="/" className="logo_link">
							M-Shop
						</Link>
					</div>

					<div
						className={`nav_menu ${click ? "show_menu" : ""}`}
						id="nav-menu"
					>
						<ul className="menu_list">
							<Link
								to="/"
								className="menu_link"
								onClick={() => setClick(!click)}
							>
								<li className="menu_item">Home</li>
							</Link>
							<Link
								to="/cart"
								className="menu_link"
								onClick={() => setClick(!click)}
							>
								<li className="menu_item">
									Cart <BiCartAlt className="icon" />
									{cart.length !== 0 && <span className="cart_count">
										{cart.length}
									</span>}
								</li>
							</Link>
							<Link
								to="/user"
								className="menu_link"
								onClick={() => setClick(!click)}
							>
								<li className="menu_item">
									Profile <BiUser className="icon" />
								</li>
							</Link>
							{user && (
								<li className="nav_btn" onClick={logout}>
									Log Out
								</li>
							)}
						</ul>
					</div>

					<div
						className="toggle_btn"
						id="nav-toggle"
						onClick={() => setClick(!click)}
					>
						<BiMenu />
					</div>
				</nav>
			</header>
		</div>
	);
}

export default Navbar;
